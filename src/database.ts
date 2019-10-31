import {MongoError} from "mongodb";
import mongo from "mongoose";

const uri = "mongodb+srv://testAdmin:Yf3PylCLybQrX8hR@cluster0-jedvy.mongodb.net/pantry?retryWrites=true&w=majority";
const client = mongo.connect(
    uri,
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        if (MongoError) {
            console.log("Unable to connect to MongoDB Atlas Instance.");
            console.log(MongoError);
        } else {
            console.log("Connected to MongoDB Atlas Instance!");
        }
    });

module.exports = client;
