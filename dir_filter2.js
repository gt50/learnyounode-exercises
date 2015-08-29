var mymodule = require('./dir_filter_module.js');
var directory = process.argv[2];
var extension = process.argv[3];
var callback = process.argv[4];

mymodule(directory,extension, callback);