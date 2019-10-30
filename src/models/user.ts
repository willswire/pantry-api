import { Schema, model  } from 'mongoose'
import { genSalt, hash, compare } from 'bcrypt'


const UserSchema = new Schema({
  name: {
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
    required: true
  },
  Password: {
    type: String,
    required: true
  },
});

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  const user = this, SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);

    hash(user.Password, salt, function (err, hash) {
      if (err) return next(err);
      user.Password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  if (this.password === '*') {cb(null,false);return;}
  compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
}

UserSchema.methods.toJson = function () {
  return {
    _id: this._id,
    firstName: this.profile.firstName,
    lastName: this.profile.lastName,
    email: this.email,
    role: this.role,
    provider: this.provider
  }
}
module.exports = model('User', UserSchema);
