import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

const User = require('./models/user');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    }, (username: String, password: String, cb:Function) => {
      return User.findOne({
        Username: username,
        Password: password
      }).then((user: any) => {
        if (!user)
          return cb(null, false, {message: 'Incorect email or password'})
        return cb(null, user, {message: 'Logged In Successfully'});
      }).catch((err: any) => cb(err));
    }
  )
);

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
  },
  function (jwtPayload, cb) {
    return User.findOneById(jwtPayload.id)
    .then(user => {
      return cb(null, user);
    })
    .catch(err => {
      return cb(err);
    });
  })
);
module.exports = passport
