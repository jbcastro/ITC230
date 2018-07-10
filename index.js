var http = require("http"); 
      var fs = require("fs");
      var episodes = require("./lib/episodes.js");
      var url = require('url');
      
http.createServer(function(req,res) {
  //var path = req.url.toLowerCase();
  var path = url.parse(req.url).pathname;
  

  
  switch(path) {
    case '/':
 
fs.readFile('public/home.html', function (err, data) {
   if (err) return console.error(err);

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
});
      break;
      
    case '/get':
      var thisquery=url.parse(req.url, true).query;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      
      if(episodes.getOne(thisquery.epnum)){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(JSON.stringify(episodes.getOne(thisquery.epnum)));
      } else{ 
          res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify({wat:'Not an episode, or you deleted it.'}));
        res.end();
      }
      res.end();
      break;
      
      
       case '/kill':
      var thisquery=url.parse(req.url, true).query;
      
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(JSON.stringify(episodes.killOne(thisquery.epnum)));
      res.end();
      
      break;
      
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);