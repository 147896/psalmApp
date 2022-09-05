const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/salmos', { useMongoClient: true } );
//Here i need changing to get from ENV.
// Eg.: require('dotenv').config(); process.env.DB_HOST
mongoose.connect('mongodb://172.26.6.6/salmos', { useMongoClient: true } );

mongoose.Promise = global.Promise;

module.exports = mongoose;
