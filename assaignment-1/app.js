const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	const body = [];
	const users = [];
	console.log(url, method);

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Assaignment 1</title></head>');
		res.write(
			'<div><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit" >Save</button></form></div>'
		);
		res.write('</html>');
	}

	if (url === '/create-user' && method === 'POST') {
		req.on('data', (chunck) => {
			body.push(chunck);
		});

		return req.on('end', () => {
			const parserBody = Buffer.concat(body).toString();
			const username = parserBody.split('=')[1];
			users.push({
				username: username
			});
			res.statusCode = 302;
			res.setHeader('Location', '/users');
			return res.end();
		});
	}

	if (url === '/users') {
		res.write('<html>');
		res.write('<head><title>Assaignment 1</title></head>');
		res.write(`<ul>`);
		users.map((user) => res.write(`<li>${user.username}</li>`));
		res.write(`</ul>`);
		res.write('</html>');
		return res.end();
	}
});

server.listen(3000, () => {
	console.log('SERVER RUNNING PORT: 3000');
});
