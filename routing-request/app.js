const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write("<body><form><input type='text' name='message' /><button type='submit'>Send</button></form></body>");
		res.write('</html>');
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		fs.writeFileSync('message.txt', 'Dummy');
		res.statusCode = 302;
		return res.end();
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body><h1>Hello World Fron Nodejs res.write</h1></body>');
	res.write('</html>');
	res.end();

	// process.exit();
});

server.listen(3000, () => {
	console.log('Your Server Running Port: 3000');
});
