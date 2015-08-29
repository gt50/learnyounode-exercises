var path = require("path");
var fs = require('fs');
var directory = process.argv[2];
var extension = "." + process.argv[3];
// fs.readdir(directory, function(err,list){
//    if (err) throw err;
//    console.log(list.filter(function(value){
//       console.log(value);
//        return path.extname(value) === extension;
//    }).join("\n"));
// });
fs.readdir(directory, function(err,list){
   if (err) throw err;
   console.log(list.filter(function(value){
       return path.extname(value) === extension;
   }));
});