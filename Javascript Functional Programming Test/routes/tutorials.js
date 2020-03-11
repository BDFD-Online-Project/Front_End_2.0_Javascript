var express = require('express');
var router = express.Router();

//router address localhost:2001/func_tutorials/index
//descriptions: Tutorial List
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/tutorials/index');
});

//router address localhost:2001/func_tutorials/01
//descriptions: Javascript Tutorials 1
//comments:
router.get('/01', function(req, res, next) {
  res.render('functions/tutorials/tut01');
});

//router address localhost:2001/func_tutorials/02
//descriptions: Javascript Tutorials 2
//comments:
router.get('/02', function(req, res, next) {
  res.render('functions/tutorials/tut02');
});

//router address localhost:2001/func_tutorials/03
//descriptions: Javascript Tutorials 3
//comments:
router.get('/03', function(req, res, next) {
  res.render('functions/tutorials/tut03');
});

//router address localhost:2001/func_tutorials/04
//descriptions: Javascript Tutorials 4
//comments:
router.get('/04', function(req, res, next) {
  res.render('functions/tutorials/tut04');
});

//router address localhost:2001/func_tutorials/05
//descriptions: Javascript Tutorials 5
//comments:
router.get('/05', function(req, res, next) {
  res.render('functions/tutorials/tut05');
});

//router address localhost:2001/func_tutorials/06
//descriptions: Javascript Tutorials 6
//comments:
router.get('/06', function(req, res, next) {
  res.render('functions/tutorials/tut06');
});

//router address localhost:2001/func_tutorials/07
//descriptions: Javascript Tutorials 7
//comments:
router.get('/07', function(req, res, next) {
  res.render('functions/tutorials/tut07');
});

//router address localhost:2001/func_tutorials/08
//descriptions: Javascript Tutorials 8
//comments:
router.get('/08', function(req, res, next) {
  res.render('functions/tutorials/tut08');
});

//router address localhost:2001/func_tutorials/09
//descriptions: Javascript Tutorials 9
//comments:
router.get('/09', function(req, res, next) {
  res.render('functions/tutorials/tut09');
});

module.exports = router;
