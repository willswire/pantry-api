"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://dbAdmin:ih8python@cluster0-jedvy.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    console.log("connection to db established");
    client.close();
});
//# sourceMappingURL=database.js.map