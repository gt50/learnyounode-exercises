var myArgs = process.argv;
myArgs.shift();
myArgs.shift();


console.log(myArgs.reduce(function(a,b){return Number(a)+Number(b);}));