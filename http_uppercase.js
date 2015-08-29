var port = process.argv[2];
//var filename = process.argv[3];
var http = require('http');
//var map = require('through2-map');
var server = http.createServer(function(request, response){
    
    if (request.method === 'POST'){
        var body = '';
        request.on('data',function(data){
            body += data;
        });
        request.on('end',function(){
            response.end(body.toUpperCase());
        });
    }
});
server.listen(port);

// ✓ Submission results match expected

// # PASS

// Your solution to HTTP UPPERCASERER passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var map = require('through2-map')
    
//     var server = http.createServer(function (req, res) {
//       if (req.method != 'POST')
//         return res.end('send me a POST\n')
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────
