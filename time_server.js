var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + (date.getDate())).slice(-2);
    var hour = ("0" + (date.getHours())).slice(-2);
    var minute = ("0" + (date.getMinutes())).slice(-2);
    var time = year+'-'+month+'-'+day+' '+hour+':'+minute;
    //socket.write(time);
    socket.end(time);
});
server.listen(port);
