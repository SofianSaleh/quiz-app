const express = require('express');
const router = express.Router();
const User = require('../database/user');

let session = require('express-session');
//Creates a session
router.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'SECRETSESSION',
    cookie: { maxAge: 60000 },
  })
);

let sess;

router.post('/loginaction', async (req, res) => {
  let { firstName, lastName, email } = req.body;

  let user = await User.findOne({ email });

  if (!user)
    return 'Invalid Login , Please Re-Enter Details or Register a New Account';
  let newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;

  await newUser.save();
  sess = req.session;
  sess.userDetails = req.body;
});

module.exports = router;
