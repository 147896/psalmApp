const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: 'http://172.26.6.6:8100'}));

require('./controllers/authController')(app)

app.listen(4000);
