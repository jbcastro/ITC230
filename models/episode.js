var mongoose = require('mongoose');


var connectionString = "mongodb://dbuser:dbuser1@ds141671.mlab.com:41671/episodes";
mongoose.connect(connectionString,{ useNewUrlParser: true });

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

var mySchema = mongoose.Schema({
epnum: { type: Number, required: true },
season: Number,
  title: String,
 }); 
 //var Episodes = mongoose.model('Episodes', mySchema);




module.exports = mongoose.model('Episode', mySchema);


//Episodes.find({}, function (err, epnum){
  //if (err) throw err;
 // console.log(epnum);
//})

//Episodes.findOne({title: 'King Size Homer'}, (err,episodes)=> {
 // if (err) throw err;
//console.log(episodes);
//})

//Episodes.findOneAndUpdate({ title: 'Lisa on Ice' }, { title: 'LISA ON ICE' }, function(err, episodes) {
  //if (err) throw err;

  // we have the updated user returned to us
  //console.log(episodes);
//});

