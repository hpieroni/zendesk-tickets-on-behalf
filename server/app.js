const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const jwt = require('express-jwt');
const jwtConfig = require('./config/jwt');
const tickets = require('./routes/tickets');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const authCheck = jwt(jwtConfig);

app.use('/api/tickets', authCheck, tickets);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).end();
});

module.exports = app;
