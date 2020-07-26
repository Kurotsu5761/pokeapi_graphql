const { makeExecutableSchema } = require("graphql-tools");
const { ApolloServer } = require("apollo-server-express");
const { P } = require("../util/dependencies");

//GraphQL Schema
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req,
    res,
    P,
  }),
  introspection: true,
  playground: true,
});

module.exports = server;
