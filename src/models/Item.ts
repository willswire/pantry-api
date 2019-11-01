var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
    objectId: mongoose.Schema.Types.ObjectId,
    name:  String,
    lifetimesales: Number
  }, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('items', itemsSchema);
