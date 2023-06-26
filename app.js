const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const githubRoute = require('./routes/github');
const guestRoute = require('./routes/guests');
const usersRoute = require('./routes/users');


app.use('/', guestRoute);
app.use('/', usersRoute);
app.use('/github', githubRoute);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
