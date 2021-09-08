const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.send('<h1>Hello </h1>');
	next();
});

app.get('/users', (req, res, next) => {
	res.send('<h1>Users</h1>');
});

app.use((req, res, next) => {
	res.status(404).send('<h1>Page Not Found!</h1>');
});

app.listen(3000, () => {
	console.log('The Server Running Port: 3000');
});
