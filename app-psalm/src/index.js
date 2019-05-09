const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app)

app.listen(4000);
