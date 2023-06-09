var express = require('express');
var router = express.Router();

//  GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//route for  about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

//route for projects page
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});


//route for contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//route for service page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router; 
