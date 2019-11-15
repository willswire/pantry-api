import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  objectId: mongoose.Schema.Types.ObjectId,
  Name: String,
  LifetimeSales: Number
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model("items", itemsSchema);
