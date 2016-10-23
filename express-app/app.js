const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      users = require('./router/routes/users'),
      app = express();
//Set up full location for route path in filesystem
app.set('routedir',path.join(__dirname, 'router/routes'));
//view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.set('env','development')
//uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'fav.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', users);
// Create router reference and pass "app" to the router, references Moistbutter/express-app/router/index.js
var router = require('./router')(app);


module.exports = app;
