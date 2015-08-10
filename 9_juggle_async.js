var bl = require('bl');
var http = require('http');

var urls = process.argv.slice(2);

var counter = urls.length;
var rsps = [];

var printInOrder = function(){
  if (!counter){
    rsps.forEach(function(rsp, i, arr){
      console.log(rsp);
    })
  }
}

urls.forEach(function(url, i, arr){
  http.get(url, function(rsp){
    rsp.pipe(bl(function(err, data){
      if (err){
        console.log("Error: ", err);
      } else {
        counter --;
        rsps[i] = data.toString();
        printInOrder();
      }
    }));
  });
});