var express = require('express');
var app = express();
require('dotenv').config();
const router = express.Router();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const methodoverride = require('method-override')



mongoose.connect(process.env.MONGODB_URI);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodoverride('_method'))
app.use(router);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// controllers
var indexRouter = require('./router/index');
const employersController = require('./router/employersController');
const storesControler = require('./router/storesControler');
// const empoyeesControler = require('./router/empoyeesControler');

app.use('/', indexRouter);
app.use('/employers', employersController);
app.use('/employers/:Eid/stores', storesControler);
// app.use('/employers/:Eid/stores/:Sid',empoyeesControler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
