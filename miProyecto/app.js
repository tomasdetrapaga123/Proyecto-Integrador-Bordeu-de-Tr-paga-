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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* Configurando el session */
app.use(session({
  secret : 'elTemploDeLasCamisetas',
  resave : false,
  saveUninitialized : true
}))

/* Creo un middelwear que le pase una función y dentro de la función le pase la información */
app.use(function (req, res, next) {
  if (req.session.user != undefined) { // Guardar session en locals. Con res guardo
    res.locals.user = req.session.user // Quiero guardar el usuario que esta en sesion
    return next() // Si entra en el if que ejecute y sino tb (return de abajo)
  }
  return next()
})

/* Middleware de session */
app.use(function (req, res, next) {// Tengo que ir a buscar cual fue la cookie que yo cree (userId)
  if (req.cookies.userId != undefined && req.session.user == undefined) { // 1) que la cookie exista en el navegador, 2) que no este el usuario en session 
    // Si no esta en sesion y esta la cookie guardada en su navegador quier que vayas a capturar el id de su usuario y quiero que lo vayas a buscar a la base de datos y quiero que lo pongas en session y en el locals 
    let idUsuarioCookie = req.cookies.userId; // Guardo el id del usuario en la variable 
    db.User.findByPk(idUsuarioCookie)// Quiero buscar por primary key y esta en idUsuarioCookie
    .then((user) => {
      req.session.user = user.dataValues // Quiero que guarde los datos de la base de datos que estan en user.dataValues
      res.locals.user = user.dataValues // Llamamos a res porque trabaja con locals
      return next()
    }).catch((err) => {
      console.log(err);
    }); // Esto es para que si el usuario no esta en sesion pero la cookie sigue guardada en su navegador
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
