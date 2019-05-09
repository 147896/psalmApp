const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/salmos', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
