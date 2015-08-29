var fs = require('fs');
var filename = process.argv[2];
var contents = fs.readFileSync(filename);
var lineCount = contents.toString().split('\n').length -1;


console.log(lineCount);
