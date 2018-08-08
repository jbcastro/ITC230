var Episodes = require ("../models/episode.js");


exports.getAll = () => {
  return Episodes.find({}, (err, result) => {
    if (err) {
      return err;
    } 
        //console.log(result);

    return result;
    
  });
  
  
};

exports.getOne = (epnum1) => {
  return Episodes.findOne({epnum: epnum1}, (err, result) => {
    if (err) {
      return err;
    } 
    //console.log(result);
    return result;
    
  });
  
};

exports.addOne = ( title1, season1, epnum1) => {
  return Episodes.create({title: title1, season:season1, epnum: epnum1}, (err, result) => {
     if (err) throw err;
    return result;
  });
  
};



exports.killOne = (epnum1) => {
  
  return Episodes.findOne({epnum: epnum1}, (err, result) =>{
    if (err) throw err;
    
    result.remove(function(err){
      if (err) throw err;
      //console.log(epnum1);
    });
  });
};
