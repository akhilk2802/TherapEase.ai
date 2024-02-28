const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

// PORT Listening
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`${'*'.repeat(50)} Listening on PORT ${port}`));

module.exports = server;
