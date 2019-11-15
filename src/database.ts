const uri =
  "mongodb+srv://testAdmin:Yf3PylCLybQrX8hR@cluster0-jedvy.mongodb.net/pantry?retryWrites=true&w=majority";
const mongo = require("mongoose");

const client = mongo.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  function(error: any, response: any) {
    if (error) {
      console.log("Unable to connect to MongoDB Atlas Instance.");
      console.log(error);
    } else {
      console.log("Connected to MongoDB Atlas Instance!");
    }
  }
);

module.exports = client;
