var express = require('express');
var router = express.Router();

//router address localhost:2001/func_lectures/index
//descriptions: Lecture List
//comments:
router.get('/index', function(req, res, next) {
  res.render('functions/lectures/index');
});

//router address localhost:2001/func_lectures/01
//descriptions: Javascript Lecture 1
//comments:
router.get('/01', function(req, res, next) {
  res.render('functions/lectures/lecture01');
});

//router address localhost:2001/func_lectures/02
//descriptions: Javascript Lecture 2
//comments:
router.get('/02', function(req, res, next) {
  res.render('functions/lectures/lecture02');
});

//router address localhost:2001/func_lectures/03
//descriptions: Javascript Lecture 3
//comments:
router.get('/03', function(req, res, next) {
  res.render('functions/lectures/lecture03');
});

//router address localhost:2001/func_lectures/04
//descriptions: Javascript Lecture 4
//comments:
router.get('/04', function(req, res, next) {
  res.render('functions/lectures/lecture04');
});

//router address localhost:2001/func_lectures/05
//descriptions: Javascript Lecture 5
//comments:
router.get('/05', function(req, res, next) {
  res.render('functions/lectures/lecture05');
});

//router address localhost:2001/func_lectures/06
//descriptions: Javascript Lecture 6
//comments:
router.get('/06', function(req, res, next) {
  res.render('functions/lectures/lecture06');
});

//router address localhost:2001/func_lectures/07
//descriptions: Javascript Lecture 7
//comments:
router.get('/07', function(req, res, next) {
  res.render('functions/lectures/lecture07');
});

//router address localhost:2001/func_lectures/08
//descriptions: Javascript Lecture 8
//comments:
router.get('/08', function(req, res, next) {
  res.render('functions/lectures/lecture08');
});

//router address localhost:2001/func_lectures/09
//descriptions: 9
//comments:
router.get('/09', function(req, res, next) {
  res.render('functions/lectures/lecture09');
});

//router address localhost:2001/func_lectures/10
//descriptions: Javascript Lecture 10
//comments:
router.get('/10', function(req, res, next) {
  res.render('functions/lectures/lecture10');
});

//router address localhost:2001/func_lectures/11
//descriptions: Javascript Lecture 11
//comments:
router.get('/11', function(req, res, next) {
  res.render('functions/lectures/lecture11');
});

//router address localhost:2001/func_lectures/12
//descriptions: Javascript Lecture 12
//comments:
router.get('/12', function(req, res, next) {
  res.render('functions/lectures/lecture12');
});

//router address localhost:2001/func_lectures/13
//descriptions: Javascript Lecture 13
//comments:
router.get('/13', function(req, res, next) {
  res.render('functions/lectures/lecture13');
});

//router address localhost:2001/func_lectures/14
//descriptions: Javascript Lecture 14
//comments:
router.get('/14', function(req, res, next) {
  res.render('functions/lectures/lecture14');
});

//router address localhost:2001/func_lectures/15
//descriptions: Javascript Lecture 15
//comments:
router.get('/15', function(req, res, next) {
  res.render('functions/lectures/lecture15');
});

//router address localhost:2001/func_lectures/16
//descriptions: Javascript Lecture 16
//comments:
router.get('/16', function(req, res, next) {
  res.render('functions/lectures/lecture16');
});

//router address localhost:2001/func_lectures/17
//descriptions: Javascript Lecture 17
//comments:
router.get('/17', function(req, res, next) {
  res.render('functions/lectures/lecture17');
});

//router address localhost:2001/func_lectures/18
//descriptions: Javascript Lecture 18
//comments:
router.get('/18', function(req, res, next) {
  res.render('functions/lectures/lecture18');
});

//router address localhost:2001/func_lectures/19
//descriptions: Javascript Lecture 19
//comments:
router.get('/19', function(req, res, next) {
  res.render('functions/lectures/lecture19');
});

module.exports = router;
