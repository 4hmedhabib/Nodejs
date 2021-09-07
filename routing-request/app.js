const http = require('http');
const routes = './routes';

const server = http.createServer(routes);

server.listen(3000, () => {
	console.log('Your Server Running Port: 3000');
});
