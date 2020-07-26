const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Local Import
const { AuthRouter } = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", AuthRouter);

module.exports = app;
