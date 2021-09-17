const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

const dbAtlas = process.env.DATABASE_ATLAS;
const connectToDb = () => {
  
  const uri = dbAtlas;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("db_personagensclassicos").collection("personagems");
    // perform actions on the collection object
    client.close();
  });
};

module.exports = connectToDb;
