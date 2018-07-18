var mongoose = require('mongoose');


var connectionString = "mongodb://dbuser:dbuser1@ds141671.mlab.com:41671/episodes";
mongoose.connect(connectionString,{ useNewUrlParser: true });

var mySchema = mongoose.Schema({
epnum: { type: Number, required: true },
season: Number,
  title: String,
 }); 

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));


module.exports = mongoose.model('Episode', mySchema);