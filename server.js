require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");

const connectToDb = require("./src/database/database");

const routes = require("./src/routers/routes");



connectToDb();

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);




app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
  });