const express = require('express');

const Salmo = require('../models/Salmo');

//const redis = require('redis');
//const client = redis.createClient();

const router = express.Router();

// Comentado, uma vez que o input ao mongodb, nesse caso, é apenas uma vez.
// Upload JSON to mongodb
/*router.post('/register', async (req, res) => {
   try {
      await Salmo.create(req.body);
      return res.send('Registred!')
   } catch (err) {
     return res.status(400).send({ error: 'Registration Failed' });
   } 
});*/


// GET All
router.get('/salmos', async (req, res) => {
   try {
     const all = await Salmo.find();
        return res.send(all);
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});

// GET chapter
router.get('/salmos/:id', async (req, res) => {
   try {
     const id = await Salmo.find({"ID": req.params.id});
        return res.send( { id } );
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});

// GET verse
router.get('/salmos/v/:id', async (req, res) => {
   try {
     const id = await Salmo.find({"_id" : req.params.id},{verse: {$elemMatch : { "ID": 1 }}});
     return res.send( { id } );
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});

router.post('/salmos/ver', async (req, res) => {
   try {
     const id = await Salmo.find({"_id" : req.body._id},{verse: {$elemMatch : { "ID": req.body.ID }}});
     return res.send( { id } );
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});

router.post('/salmos/vers', async (req, res) => {
   try {
     const id = await Salmo.find({},{verse: {$elemMatch : { "ID": req.body.ID }}});
     return res.send( { id } );
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});



module.exports = app => app.use('/api', router);
