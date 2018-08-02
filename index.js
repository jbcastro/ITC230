'use strict';
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var Episodes = require('./models/episode');

app.use(express.static('public'));
app.use(require("body-parser").urlencoded({extended: true}));
app.use(bodyParser.json());
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");
var episodeMethods = require ("./models/episodeMethods.js");


app.get('/', (req, res)=> {
    res.render('home');
   
});

app.get('/episode', (req, res, next) => {
     episodeMethods.getOne(req.query.epnum).then((items) => {
     res.render('details', {result: items}); 
        }).catch((err) =>{
        return next(err);
 });
});

app.get('/delete', (req,res, next) => {
    episodeMethods.killOne(req.query.epnum).then((items) => {
    res.render('delete', {result: items}); 
        }).catch((err) =>{
        return next(err);
 });
});



app.get('/add', (req, res, result)=>{
     res.render('add');
     return Episodes.create({epnum: '5', title: 'Billy', season: '9' });
  
});


app.post('/add', (req, res, result)=>{
     res.render('add');
    //  return Episodes.create({epnum: '4'});
  
});
// app.post('/add', (req, res, next)=>{
//      res.render('added');
//   return Episodes.create({epnum: epnum, title: title, season: season })
   
    
    //console.log(result);
   
   
 


//apis




app.get('/api/episodes', (req, res) => {
        Episodes.find(function(err, result){
            if (err)
           return res.send(err);
            res.json(result);
        });
    });
    
    
app.get('/api/episode/:epnum', (req, res, next) => {
       episodeMethods.getOne(req.query.epnum).then((item) => {
     res.json(item); 
  }).catch((err) =>{
    return next(err);
  
 });
    });
    
    app.get('api/delete/:epnum', (req,res, next) => {
 episodeMethods.killOne(req.query.epnum).then((items) => {
     res.json('delete', {result: items}); 
  }).catch((err) =>{
    return next(err);
 });
});



var port = process.env.PORT || 3000;




app.listen(port);
console.log('Magic happens on port ' + port);


