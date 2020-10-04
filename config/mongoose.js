const mongoose = require('mongoose');
const chalk=require('chalk');

mongoose.connect('mongodb://localhost/teachup', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to the database!'));

db.once('open', function () {
	console.log(chalk.bold.green('Connected to the database!'));
});

module.exports = db;
