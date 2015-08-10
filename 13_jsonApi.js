var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true);
  var iso = parsedUrl.query.iso;
  var date = new Date(iso);
  var obj = {};
  if (req.method == 'GET'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    switch(parsedUrl.pathname){
      case '/api/parsetime':
        var obj = {
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds(),
        }
        break;
      case '/api/unixtime':
        var obj = {unixtime: date.getTime()}
        break;
      default: 
        res.end('next time');
    }
    res.end(JSON.stringify(obj));

  } else {
    res.end("I don't understand");
  }
    
});

server.listen(port);

// OFFICIAL SOLUTION
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
