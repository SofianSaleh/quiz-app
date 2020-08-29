let express = require('express');
let router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  try {
    res.render(
      'layout',
      (data = {
        page: 'home',
      })
    );
  } catch (e) {
    res.render(
      'error',
      (data = { page: err, msg: 'cannot find the page you are looking for' })
    );
  }
});

module.exports = router;
