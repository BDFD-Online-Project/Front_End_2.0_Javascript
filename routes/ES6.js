var express = require('express');
var router = express.Router();

//router address localhost:2001/func_es6/index
//descriptions: ES6 List
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/es6/index');
});

//router address localhost:2001/func_es6/01
//descriptions: Javascript Lecture 1
//comments:
router.get('/01', function(req, res, next) {
  res.render('functions/es6/es6_01');
});

//router address localhost:2001/func_es6/02
//descriptions: Javascript Lecture 2
//comments:
router.get('/02', function(req, res, next) {
  res.render('functions/es6/es6_02');
});

//router address localhost:2001/func_es6/03
//descriptions: Javascript Lecture 3
//comments:
router.get('/03', function(req, res, next) {
  res.render('functions/es6/es6_03');
});

//router address localhost:2001/func_es6/04
//descriptions: Javascript Lecture 4
//comments:
router.get('/04', function(req, res, next) {
  res.render('functions/es6/es6_04');
});

//router address localhost:2001/func_es6/05
//descriptions: Javascript Lecture 5
//comments:
router.get('/05', function(req, res, next) {
  res.render('functions/es6/es6_05');
});

//router address localhost:2001/func_es6/06
//descriptions: Javascript Lecture 6
//comments:
router.get('/06', function(req, res, next) {
  res.render('functions/es6/es6_06');
});
module.exports = router;
