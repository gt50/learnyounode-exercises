var http = require('http');
var url = process.argv[2];
var webData = '';

http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
        webData = webData + data;
    });
    response.on('error',console.error);
    response.on('end',function(){
        console.log(webData.length);
        console.log(webData);
    })
});



// ✓ Submission results match expected

// # PASS

// Your solution to HTTP COLLECT passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))  
//     })

// ────────────────────────────────────────────────────────────────────────────────