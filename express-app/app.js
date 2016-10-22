const express = require('express'),
      path = require('path'),
      //favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      users = require('./router/routes/users'),
      app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('routedir',path.join(__dirname, 'router/routes'));
//console.log(app.get('views'));
app.set('view engine', 'hbs');
app.set('env','development')
//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', users);
var router = require('./router')(app);
//catch 404 and forward to error handler

//error handlers'development'

//development error handler

//production error handler

module.exports = app;
