'use strict'
var express = require("express");
var app = express();
var episodes = require("./lib/episodes.js");
var laura = exports.getOne;
app.use(express.static('public'));

// send static file as response
app.get('/', (req, res) => {
 //res.type('text/html');
 res.sendFile(__dirname + '/public/home.html'); 
});




app.get('/get', (req,res) => {
 let result = episodes.getOne(req.query.epnum);
 res.render(__dirname + '/views/details.html', {epnum: req.query.epnum, result: result }); 
});

app.post('/get', (req, res) => {
  console.log(req.body); // display parsed form submission
});




app.get('/delete', (req,res) => {
 let result = episodes.killOne(req.query.epnum);
  res.render(__dirname + '/views/delete.html', {epnum: req.query.epnum, result: result }); 
  
});
app.post('/delete', (req, res) => {
  console.log(req.body); // display parsed form submission
});


let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");



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





