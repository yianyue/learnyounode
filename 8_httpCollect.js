// var bl = require('bl');
var http = require('http');

var url = process.argv[2];
// using bl

// http.get(url, function(rsp){
//   rsp.pipe(bl(function(err, data){
//     console.log(data.toString().length);
//     console.log(data.toString());
//   }));
// });

// not using bl

var req = http.get(url, function(rsp){
  var all = '';
  rsp.setEncoding('utf8');
  rsp.on('data', function(data){
   all += data;
  });
  rsp.on('end', function(){
    console.log(all.length);
    console.log(all);
  });
});