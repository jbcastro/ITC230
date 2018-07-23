var Episode = require ("../models/episode.js");



exports.getAll = (title) => {
  return Episode.find({}, (err, result) => {
     if (err) throw err;
    console.log(title);
  });
};

exports.getOne = (title) => {
  return Episode.findOne({}, (err, result) => {
    if (err) throw err;
    console.log(title);
  });
};
