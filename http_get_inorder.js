var http = require('http');
var urls = process.argv.slice(2);
var responses = process.argv.slice(2);
var completedReqests = 0;


for (var i=0; i < urls.length;i++){
    http.get(urls[i],(function (i){ 
        return function(response){
            var webData = '';
            response.setEncoding('utf8');
            response.on('data', function(data){
                webData = webData + data;
            });
            response.on('error',console.error);
            response.on('end',function(){
                responses[i] =webData;
                completedReqests++;
                if (completedReqests === urls.length){
                    console.log(responses.join('\n'));
                }
            });
        };
    })(i));
}



//http://stackoverflow.com/questions/25825497/request-and-response-mismatch-in-async-callback
//http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs

// for (pool in pools) {
// var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
// request(url, ( function(pool) {
//     return function(err, resp, body) {
//         if (err) throw err;
//         $ = cheerio.load(body);
//         console.log(pool);
//         // TODO: scraping goes here!
//     }
// } )(pool));
// }

// ✓ Submission results match expected

// # PASS

// Your solution to JUGGLING ASYNC passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)
    
//           results[index] = data.toString()
//           count++
    
//           if (count == 3)
//             printResults()
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++)
//       httpGet(i)

// ────────────────────────────────────────────────────────────────────────────────
