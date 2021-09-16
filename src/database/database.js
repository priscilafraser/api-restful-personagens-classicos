const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(process.env.DATABASE_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDb;
