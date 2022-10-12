var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.query.username;
  console.log(`username: ${username}`);
  res.render('index');
});

module.exports = router;
