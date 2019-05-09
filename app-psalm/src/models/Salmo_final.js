const mongoose = require('../database');

const SalmoSchema = new mongoose.Schema([{
	   ID: {type: Number},
	   verse: [
	     {
              _id: {type: mongoose.Schema.Types.ObjectId, ref: 'Verse'  }
	     }
	   ]
}]);

const Salmo = mongoose.model('Salmo', SalmoSchema);
module.exports = Salmo;
