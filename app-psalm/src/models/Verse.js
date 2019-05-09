const mongoose = require('../database');
const Salmo = require('../models/Salmo').schema;
/*
const VerseSchema = new mongoose.Schema({
	   verse: [{
              ID: {type: String, ref: 'Salmo'},
	      text: {type: String, ref: 'Salmo'},
           }],
});
*/

const VerseSchema = new mongoose.Schema({
      ID: {type: mongoose.Schema.Types.ObjectId, ref: 'Salmo'},
      verse: [{Salmo}]
});

const Verse = mongoose.model('Verse', VerseSchema);
module.exports = Verse;
