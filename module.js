/*
	build server side
*/
var http = require('http');

var cnt = 0;
var server = http.createServer(function(req, res){
	res.end('' + ++cnt);
});

server.listen(3000);
