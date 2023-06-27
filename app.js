const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const githubRoute = require('./routes/github');
const guestRoute = require('./routes/guests');
const usersRoute = require('./routes/users');
const notFound = require('./middlewares/404');
const error = require('./middlewares/error');

app.use(express.urlencoded({extended: false}));

app.use('/', guestRoute);
app.use('/users', usersRoute);
app.use('/github', githubRoute);

app.use(notFound);
app.use(error);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
