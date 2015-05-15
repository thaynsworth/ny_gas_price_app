var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!'})
});

/* GET Gas page */
router.get('/gas', function(req, res) {
  res.render('gas', { title: 'Gas Price Page!'})
});

module.exports = router;
