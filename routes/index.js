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
  var db = req.db;
  var collection = db.get('gas_prices');
  //var allProductsArray = collection.find().toArray();
  //console.log(allProductsArray);
  //alert(allProductsArray);
  //res.render('gas', { gas: allProductsArray });
  collection.find({},{},function(err,docs){
    console.log(docs);
    res.render('gas', {
      "gas": docs
    });
  });
});

module.exports = router;
