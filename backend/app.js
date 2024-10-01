var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { connectDB } = require('./src/db/utilService.js');
const { initDB } = require('./src/db/DBService.js');
connectDB();
initDB();

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;
