const http = require('http');

const server = http.createServer((req, res) => {
	// console.log({
	// 	url: req.url,
	// 	method: req.method,
	// 	headers: {
	// 		host: req.headers.host,
	// 		Os_Type: req.headers['sec-ch-ua-platform'],
	// 		Browser: req.headers['sec-ch-ua']
	// 	}
	// });
	//
	//
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body><h1>Hello World Fron Nodejs res.write</h1></body>');
	res.write('</html>');
	res.end();
	process.exit();
});

server.listen(3000, () => {
	console.log('Your Server Running Port: 3000');
});
