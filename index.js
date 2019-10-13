// index.js
// where your node app starts

// init project
const express = require("express");
const mongo = require('mongodb');
const app = express();

// connect to the mongodb instance in our atlas org account
const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://dbAdmin:ih8python@cluster0-jedvy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("connection to db established!")
    client.close();
});

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.json({
        "message": "hello"
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});