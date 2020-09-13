const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, (error) =>
	error
		? console.log(`Error in starting the server at port ${port}\n`, error)
		: console.log(`Server is running at port ${port}`)
);
