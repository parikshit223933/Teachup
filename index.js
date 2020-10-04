const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const socketServer = require('http').Server(app);
const socketServerClass = require('./config/socket-server');
const socketServerInstance = new socketServerClass(socketServer);
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');

app.use(
	session({
		name: 'Teachup',
		secret: 'SOMETHING',
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1000 * 60 * 60 * 6 },
		store: new mongoStore({
			mongooseConnection: db,
			autoRemove: 'disabled',
		}),
	})
);
// SASS MIDDLEWARE
app.use(
	sassMiddleware({
		src: path.join(__dirname, './assets/scss'),
		dest: path.join(__dirname, './assets/css'),
		debug: true,
		outputStyle: 'expanded',
		prefix: '/css', // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
	})
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(expressLayouts);
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('case sensitive routing', false);
app.set('views', './views');

socketServer.listen(port, (error) =>
	error
		? console.log(chalk.redBright(`Error in starting the server at port ${port}\n`), error)
		: console.log(chalk.blueBright(`Server is running at port ${port}`))
);
