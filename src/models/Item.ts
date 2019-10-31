import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    LifetimeSales: Number,
    Name:  String,
    objectId: mongoose.Schema.Types.ObjectId,
  }, {
    versionKey: false // You should be aware of the outcome after set to false
});

export default mongoose.model("items", itemsSchema);
