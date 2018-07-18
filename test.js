var Episode = require("./models/episode");

// return all records
Episode.find({}, (err, items) => {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});