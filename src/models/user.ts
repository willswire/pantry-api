import { Schema, model  } from 'mongoose'


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  lists: {
    type: Array,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = model('User', UserSchema);
