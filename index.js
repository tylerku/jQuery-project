var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
	if (req.url === "/app.js"){
		console.log("loading javascript");
		fs.readFile("./app.js", function(error, data) {
			console.log("Correct file paths");
			if (error) {
				throw error;
			} else {
				res.writeHead(200, { 'Content-Type': 'application/javascript'});
				res.write(data);
			}
			res.end();
		})
	}
	else if (req.url === "/css/main.css"){
		fs.readFile("css/main.css", function(error, data) {
			if (error) {
				throw error;
			} else {
				res.writeHead(200, { 'Content-Type': 'text/css'});
				res.write(data);
			}
			res.end();
		})
	} else {
		fs.readFile("index.html", function (error, pgResp) {
			if (error) {
				res.writeHead(404);
				res.write('Contents you are looking are Not Found');
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(pgResp);
			}
			res.end();
		});	
	}
}).listen(8081); //, function() {
//	console.log("Server started...");
//}) //the server object listens on port 8080
