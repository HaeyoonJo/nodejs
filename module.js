var http = require('http');

var cnt = 0;

var server = http.createServer(function(req, res) {
	cnt = cnt + 1 ;
	console.log(cnt);
	
	res.end('' + cnt);
});

server.listen(3000);
