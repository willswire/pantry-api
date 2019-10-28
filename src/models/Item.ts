var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
    objectId: mongoose.Schema.Types.ObjectId,
    name:  String,
    LifetimeSales: Number
  });

module.exports = mongoose.model('items', itemsSchema);
