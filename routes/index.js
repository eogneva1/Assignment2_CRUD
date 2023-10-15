var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to the dressStore application!" });
});

router.use('/api', apiRouter);

module.exports = router;

