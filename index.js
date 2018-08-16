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


app.get('/', (req, res, next) => {
  episodeMethods.getAll().then((items) => {
    res.render('home', {episodes: JSON.stringify(items) }); 
  }).catch((err) =>{
    return next(err);
  });
});

app.get('/get', (req, res, next) => {
     episodeMethods.getOne(req.query.epnum).then((items) => {
     res.render('details', {episodes: JSON.stringify(items) });
        }).catch((err) =>{
        return next(err);
 });
});

app.get('/delete', (req,res, next) => {
    episodeMethods.killOne(req.query.epnum).then((items) => {
    res.render('delete', {episodes: JSON.stringify(items) });
        }).catch((err) =>{
        return next(err);
 });
});

// app.post('//add/epnum:epnum, next
//      res.render('add');
//         return Episodes.create({ title: req.params.title, season: req.params.season, epnum: req.params.epnum });
  
// });


app.post('/add', function(req, res) {
   
    console.log(req.body);
   
   Episodes.update({'epnum':req.body.epnum,}, req.body, {upsert:true}, (err, result) => {

  console.log(result);
  res.render('added', {result: req.body});
}); 
   
});






app.post('/api/v1/add', function(req, res) {
   
    console.log(req.body);
   
   Episodes.update({'epnum':req.body.epnum,}, req.body, {upsert:true}, (err, result) => {

  console.log(result);
  res.render('added', {result: req.body});
}); 
   
});



app.get('/api/v1/episodes', (req, res) => {
        Episodes.find(function(err, result){
            if (err)
           return res.send(err);
            res.json(result);
        });
    });
    
    
app.get('/api/v1/episode/:epnum', (req, res, next) => {
    let epnum = req.params.epnum;
    console.log(epnum);
   Episodes.findOne({epnum: epnum}, (err, result) => {
        if (err || !result) return next(err);
        res.json( result );    
    });
});


app.get('/api/v1/delete/:epnum', (req, res, next) => {
    let epnum = req.params.epnum;
    console.log(epnum);
   Episodes.remove({epnum: epnum}, (err, result) => {
        if (err || !result) return next(err);
        res.json( result );    
    });
});



//app.get('/api/v1/delete/:epnum', (req, res, next)=> {
//    let epnum= req.params.epnum;
//    console.log(epnum);
//    Episodes.findOne({epnum: epnum}, (err, result)=>{
//        if (err || !result) return next(err);
//        result.remove(function(err){
//            if (err || !result) return next(err);
//            res.json( result );
//        });
//    });
//});
    
//    app.get('api/v1/delete/:epnum', (req,res, next) => {
// episodeMethods.killOne(req.query.epnum).then((items) => {
//     res.json('delete', {result: items}); 
//  }).catch((err) =>{
//    return next(err);
// });
//});



var port = process.env.PORT || 3000;




app.listen(port);
console.log('Magic happens on port ' + port);