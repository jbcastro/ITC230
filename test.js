var Episodes = require("./models/episode");

// return all records
Episodes.find({}, (err, episode) => {
  if (err) throw err;
  console.log(episode);
  // other code here
});

 //Episodes.find({epnum: '0'}, (err, result) => {
   // if (err) throw err;
    //console.log(result);
  //});
  
  //return Episodes.find({title: 'Homer'}, (err, result) => {
    //if (err) {
     // return err;
   // } 
   // console.log(result);
    
 // });
 
 Episodes.find({}, function (err, epnum){
  if (err) throw err;
  console.log(epnum);
});
  
  //return Episodes.find({title: 'Homer'}, (err, reuslt) => {
    //if (err) throw err;
    
   // Episodes.remove(function(err){
    //  if (err) throw err;
      
     // console.log(Episodes.episode);
      
  //  });
    
 // });