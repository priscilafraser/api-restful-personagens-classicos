require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const connectToDb = require("./src/database/database");
const routes = require("./src/routers/routes");
let cors = require("cors");

connectToDb();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// CORS
app.use(cors());
app.options("*", cors());

app.use(routes);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
