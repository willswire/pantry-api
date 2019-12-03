import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listsSchema = new Schema({
  items: [{
    type: Schema.Types.ObjectId,
    required: true
  }],
  title: String,
  favorite: Boolean
}, {
  versionKey: false, // You should be aware of the outcome after set to false
  minimize: false // Needed in order to allow for the creation of empty objects
});

module.exports = mongoose.model("lists", listsSchema);
