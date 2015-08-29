module.exports = function(directory, extension, callback){
    var path = require("path");
    var fs = require('fs');
    extension = "." + extension;
    fs.readdir(directory, function(err,list){
       if (err) return callback(err);
       var filteredList = list.filter(function(value){
           return path.extname(value) === extension;
       });
       console.log(filteredList.join('\n'));
       //return filteredList;
       callback(null,filteredList);
    });
};

// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

// ────────────────────────────────────────────────────────────────────────────────
// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
    
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
    // }