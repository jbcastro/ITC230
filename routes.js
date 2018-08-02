var episodeMethods = require ("./models/episodeMethods.js");

// module.exports = function(app) {
app.get('/', (req, res) => {
 res.render('home');



//  var episodes = episodeMethods.getAll();
//  if(episodes) {
//      res.json(episodes);
     
//  } else {
//      return res.status(500).send('ERROR ERROR DUDE');
//  }
// });


  app.get('/api/episodes/:epnum', (req, res, next) => {
 //console.log(req.query);
 episodeMethods.getOne(req.query.epnum).then((items) => {
     app.render('details', {result: items}); 
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



};