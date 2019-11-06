import { Schema, model  } from 'mongoose'


const UserSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Birthday: {
    type: Date,
    required: true
  },
  Gender: {
    type: String,
    required: false
  },
  Lists: {
    type: Array,
    required: true
  },
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});

module.exports = model('User', UserSchema);
