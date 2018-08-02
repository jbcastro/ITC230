'use strict';
const express = require("express");
const app = express();
var episodes = require("./lib/episodes.js");

var episodeMethods = require ("./models/episodeMethods.js");
app.use(express.static('public'));

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");


app.get('/', (req, res, next) => {
  episodeMethods.getAll().then((items) => {
    res.render('../public/home.html', {episodes: items }); 
  }).catch((err) =>{
    return next(err);
  });
});

app.get('/get', (req, res, next) => {
 //console.log(req.query);
 episodeMethods.getOne(req.query.title).then((items) => {
     res.render('details', {result: items}); 
  }).catch((err) =>{
    return next(err);
 });
});

app.post('/get', (req, res) => {
  console.log(req.body); // display parsed form submission
});




//app.get('/delete', (req,res) => {
 //let result = episodes.killOne(req.query.epnum);
  //res.render(__dirname + '/views/delete.html', {epnum: req.query.epnum, result: result }); 
  
//});
//app.post('/delete', (req, res) => {
  //console.log(req.body); // display parsed form submission
//});



//app.get('/get', (req, res, next) => {
  //Episode.find({}, function (err, epnum) {
   // if (err) return next(err);
    //console.log(epnum);
  //  res.render('../views/details.html', {episodes: epnum }); 
 //// });
//});

//app.get('/get', (req,res) => {
// let result = episodeMethods.getOne(req.query.epnum);
// res.render(__dirname + '/views/details.html', {epnum: req.query.epnum, result: result }); 
//});


// send content of 'home' view
app.get('/', (req,res) => {
 res.render('home');
});


// define 404 handler
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

app.listen(app.get('port'), () => {
 console.log('Express started'); 
});





