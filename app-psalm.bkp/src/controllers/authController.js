const express = require('express');

const Salmo = require('../models/Salmo');

const router = express.Router();

router.post('/register', async (req, res) => {
   try {
     const cap = await Salmo.create(req.body);
     return res.send({ cap });
   } catch (err) {
     return res.status(400).send({ error: 'Registration Failed' });
   } 
});

router.get('/salmos', async (req, res) => {
   try {
     const cap = await Salmo.find();
     return res.send({ cap });
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});



module.exports = app => app.use('/auth', router);
