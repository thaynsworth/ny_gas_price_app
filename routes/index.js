var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gas Price App' });
  var db = req.db;
  var collection = db.get('mynewcollection');
  collection.find({},{},function(e,docs){
    res.render('foo', {
      "foo" : docs
    });
  });
});

module.exports = router;
