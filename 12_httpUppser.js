var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  
  if (req.method == 'POST'){
    var rqBody = '';    
    req.setEncoding('utf8');

    req.on('data', function(data){
      rqBody += data.toUpperCase();
    });
    
    req.on('end', function(){
      res.end(rqBody);
    });
    
  } else {
    res.end("I don't understand");
  }
  
});

server.listen(port);