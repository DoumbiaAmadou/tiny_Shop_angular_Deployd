var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	
	//console.log(req) ; 
	res.render('app.ejs', {});
  	//res.render('index', { title: 'Express' });
});
router.get('/admin/', function(req, res, next) {
	
	//console.log(req) ; 
	res.render('adminApp.ejs', {});
  	//res.render('index', { title: 'Express' });
});
module.exports = router ;

