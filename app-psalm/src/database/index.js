const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/salmos', { useMongoClient: true } );
mongoose.connect('mongodb://172.26.6.6/salmos', { useMongoClient: true } );

mongoose.Promise = global.Promise;

module.exports = mongoose;
