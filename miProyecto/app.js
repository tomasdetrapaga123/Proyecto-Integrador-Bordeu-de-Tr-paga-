var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

/* Requerimiento de DB */
const db = require("./database/models");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
/* Para que se pueda capturar la información enviada */
app.use(express.json()); // Método POST
app.use(express.urlencoded({ extended: false })); // Método POST
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* Configurando el session */
app.use(session({
  secret : 'elTemploDeLasCamisetas',
  resave : false,
  saveUninitialized : true
}))

/* Middleware de session */
app.use(function (req, res, next) {
  if (req.session.user != undefined) { 
    res.locals.user = req.session.user 
    return next() 
  }
  return next()
})

/* Middleware de cookies */
app.use(function (req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) { 
    let idUsuarioCookie = req.cookies.userId; 
    db.User.findByPk(idUsuarioCookie)
    .then((user) => {
      req.session.user = user.dataValues
      res.locals.user = user.dataValues 
      return next()
    }).catch((err) => {
      console.log(err);
    }); 
  } else {
          return next()
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
