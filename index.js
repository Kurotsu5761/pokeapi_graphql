require("dotenv").config();
const db = require("./db");
const app = require("./app");
const graphql = require("./graphql");
const isAuth = require("./middleware/isAuth");

const PORT = process.env.PORT || 3000;

db.connect().then(() => {
  //Setup for Graphql
  app.use("/graphql", isAuth);
  graphql.applyMiddleware({ app, path: "/graphql" });

  //Initialize Express App
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
});
