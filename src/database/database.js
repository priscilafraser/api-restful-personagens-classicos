const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

const dbAtlas = process.env.DATABASE_ATLAS;
const connectToDb = () => {
  mongoose.connect(process.env.DATABASE_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const uri = "mongodb+srv://fraser:4qx3xoO6Dko3NFNs@cluster0.yvygw.mongodb.net/db_personagensclassicos";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("db_personagensclassicos").collection("personagems");
    // perform actions on the collection object
    client.close();
  });
};

module.exports = connectToDb;
