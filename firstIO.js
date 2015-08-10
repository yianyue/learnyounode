var fs = require('fs');

var filepath = process.argv[2];
var str = fs.readFileSync(filepath).toString();

console.log(str.split('\n').length-1);