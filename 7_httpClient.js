var http = require('http');

var url = process.argv[2];

http.get(url, function(rsp){
  rsp.setEncoding('utf8');
  rsp.on('data', function(data){
    console.log(data);
  });
});