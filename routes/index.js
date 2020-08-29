let express = require('express');
let router = express.Router();

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

router.get('/', (req,res) => {
  try {
    
  } catch (e) {
    res.send({success: false, msg: e.message})
  }
})

module.exports = router;
