var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var filepath = process.argv[3];

var filestr = fs.createReadStream(filepath);

var server = http.createServer(function(req, rsp){
  filestr.pipe(rsp);
});

server.listen(port);

// OFFICIAL SOLUTION
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
