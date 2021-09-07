const express = require('express');
const app = express();

app.use('/', (req, res, nex) => {
	res.send('<h1>Hello </h1>');
});

app.listen(3000, () => {
	console.log('The Server Running Port: 3000');
});
