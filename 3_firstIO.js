var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath).toString();

console.log(str.split('\n').length-1);