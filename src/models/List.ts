import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listsSchema = new Schema({
  had: Object,
  has: Object,
  title: String,
  wants: Object
}, {
  minimize: false, // Needed in order to allow for the creation of empty objects
  versionKey: false // You should be aware of the outcome after set to false
});

export default mongoose.model("lists", listsSchema);
