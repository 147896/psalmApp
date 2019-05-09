const mongoose = require('../database');

const SalmoSchema = new mongoose.Schema({
       cap: [{
	       chapter: {
			ID: Number,
			verse: [{
				ID: {
				type: Number
				},
				text: {
				type: String
				},
			}],
		}
	}]
}); 

const Salmo = mongoose.model('Salmo', SalmoSchema);

module.exports = Salmo;
