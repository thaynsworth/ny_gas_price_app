var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gas Price App' });
  var db = req.db;
  var collection = db.get('gas_prices');
  collection.find({},{},function(e,docs){
    res.render('gasList', {
      "gasList" : docs
    });
  });
});

module.exports = router;
