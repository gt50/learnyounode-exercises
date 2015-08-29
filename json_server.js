var port = process.argv[2];
var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
    
    if (request.method === 'GET'){
        var jsonResponse = {};
        var mydate = new Date(url.parse(request.url,true).query.iso);        
        if (url.parse(request.url,true).pathname === '/api/parsetime'){
            jsonResponse = {
                "hour": mydate.getHours(),
                "minute": mydate.getMinutes(),
                "second": mydate.getSeconds()
            };
        } else {
            jsonResponse = {
                "unixtime" : mydate.getTime()
            };
        }
        //console.log(myurl);
        response.end(JSON.stringify(jsonResponse));
    }
});
server.listen(port);





// gt50@freecodecamp-nodejs:~/workspace $ node -pe "require('url').parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z',true)"
// { protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?iso=2013-08-10T12:10:15.474Z',
//   query: { iso: '2013-08-10T12:10:15.474Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z',
//   href: '/api/parsetime?iso=2013-08-10T12:10:15.474Z' }


// gt50@freecodecamp-nodejs:~/workspace $ node -pe "require('url').parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z',true).query.iso"
// 2013-08-10T12:10:15.474Z

// ✓ Submission results match expected

// # PASS

// Your solution to HTTP JSON API SERVER passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var url = require('url')
    
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }
    
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
    
//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)
    
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────