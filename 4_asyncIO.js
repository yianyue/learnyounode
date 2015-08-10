var fs = require('fs');

var filepath = process.argv[2];
fs.readFile(filepath, function(err, data){
  console.log(data.toString().split('\n').length-1);
});