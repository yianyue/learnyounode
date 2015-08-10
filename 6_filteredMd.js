var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, cb){
  fs.readdir(dirname, function(err,data){
    if (err){
      return cb(err);
    }
    var list = data.filter(function(item){
      return path.extname(item) == '.' + ext;
    })
    cb(null, list);
  });
}