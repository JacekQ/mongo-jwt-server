const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // basic validation - should be extended
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide Email and Password!' });
  }

  // see if user with the given email exists
  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // if user exists return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // if user does NOT exists create and save user record
    const user = new User({ email, password });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      // respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.signin = function(req, res, next) {
  // user has already had their email
  // respond to request indicating the user was created
  console.log(100, req.user);

  res.send({ token: tokenForUser(req.user) });
};
