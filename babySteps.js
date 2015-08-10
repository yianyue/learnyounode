var arr = process.argv.slice(2);
var sum = arr.reduce(function(a,b,i,arr){
 return Number(a)+Number(b);
});
console.log(sum);