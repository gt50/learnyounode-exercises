var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        console.log(data);
    }).on('error', function(error){
        console.log("Got error: " + error.messsage);
    });
});

// ✓ Submission results match expected

// # PASS

// Your solution to HTTP CLIENT passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })

// ────────────────────────────────────────────────────────────────────────────────