var express = require('express');
var router = express.Router();

//router address localhost:2001/func_fundamental/index
//descriptions: Lecture List
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/fundamental/index');
});

//router address localhost:2001/func_fundamental/01
//descriptions: Javascript Lecture 1
//comments:
router.get('/01', function(req, res, next) {
  res.render('functions/fundamental/fund01');
});

//router address localhost:2001/func_fundamental/02
//descriptions: Javascript Lecture 2
//comments:
router.get('/02', function(req, res, next) {
  res.render('functions/fundamental/fund02');
});

//router address localhost:2001/func_fundamental/03
//descriptions: Javascript Lecture 3
//comments:
router.get('/03', function(req, res, next) {
  res.render('functions/fundamental/fund03');
});

//router address localhost:2001/func_fundamental/04
//descriptions: Javascript Lecture 4
//comments:
router.get('/04', function(req, res, next) {
  res.render('functions/fundamental/fund04');
});

//router address localhost:2001/func_fundamental/05
//descriptions: Javascript Lecture 5
//comments:
router.get('/05', function(req, res, next) {
  res.render('functions/fundamental/fund05');
});

//router address localhost:2001/func_fundamental/06
//descriptions: Javascript Lecture 6
//comments:
router.get('/06', function(req, res, next) {
  res.render('functions/fundamental/fund06');
});

//router address localhost:2001/func_fundamental/07
//descriptions: Javascript Lecture 7
//comments:
router.get('/07', function(req, res, next) {
  res.render('functions/fundamental/fund07');
});

//router address localhost:2001/func_fundamental/08
//descriptions: Javascript Lecture 8
//comments:
router.get('/08', function(req, res, next) {
  res.render('functions/fundamental/fund08');
});

//router address localhost:2001/func_fundamental/09
//descriptions: 9
//comments:
router.get('/09', function(req, res, next) {
  res.render('functions/fundamental/fund09');
});

//router address localhost:2001/func_fundamental/10
//descriptions: Javascript Lecture 10
//comments:
router.get('/10', function(req, res, next) {
  res.render('functions/fundamental/fund10');
});

//router address localhost:2001/func_fundamental/11
//descriptions: Javascript Lecture 11
//comments:
router.get('/11', function(req, res, next) {
  res.render('functions/fundamental/fund11');
});

//router address localhost:2001/func_fundamental/12
//descriptions: Javascript Lecture 12
//comments:
router.get('/12', function(req, res, next) {
  res.render('functions/fundamental/fund12');
});

//router address localhost:2001/func_fundamental/13
//descriptions: Javascript Lecture 13
//comments:
router.get('/13', function(req, res, next) {
  res.render('functions/fundamental/fund13');
});

//router address localhost:2001/func_fundamental/14
//descriptions: Javascript Lecture 14
//comments:
router.get('/14', function(req, res, next) {
  res.render('functions/fundamental/fund14');
});

//router address localhost:2001/func_fundamental/15
//descriptions: Javascript Lecture 15
//comments:
router.get('/15', function(req, res, next) {
  res.render('functions/fundamental/fund15');
});

//router address localhost:2001/func_fundamental/16
//descriptions: Javascript Lecture 16
//comments:
router.get('/16', function(req, res, next) {
  res.render('functions/fundamental/fund16');
});

//router address localhost:2001/func_fundamental/17
//descriptions: Javascript Lecture 17
//comments:
router.get('/17', function(req, res, next) {
  res.render('functions/fundamental/fund17');
});

//router address localhost:2001/func_fundamental/18
//descriptions: Javascript Lecture 18
//comments:
router.get('/18', function(req, res, next) {
  res.render('functions/fundamental/fund18');
});

//router address localhost:2001/func_fundamental/19
//descriptions: Javascript Lecture 19
//comments:
router.get('/19', function(req, res, next) {
  res.render('functions/fundamental/fund19');
});

module.exports = router;
