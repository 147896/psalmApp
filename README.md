**##PSalm APP to presentation the book's psalm's.**<br /> 
###Also, will send push notification that contains a Verse specifically.<br />
###The Chapter will be referenced when the Verse is sent.<br />
###The purpose of this App is to motivate you to read a psalm every day. Leaving your day a little better in this troubled world.

-------------------------------------------------------------------------------------------------------------------------------
by Gabriel Ribas, Node.js and Python Developer.

Basically this app was built with the following assumptions.:
- What was needed to do before ?
   1) Firstly we used the Python to scraping the bibleon website in xml and convert to JSON format.
   2) The JSON file was imported into mongodb.

- After ?
   3) We define the data model in Node.js (mogoose) Salmo.js, for example.:

```
const mongoose = require('../database');

const SalmoSchema = new mongoose.Schema({
        ID: Number,
        verse: [{
           ID: {type: Number},
           text: {type: String}
        }]
});

const Salmo = mongoose.model('Salmo', SalmoSchema);
module.exports = Salmo;
```

   4) We created the routes in Noje.js (express module) to.:
      - GET : Obtain all psalm book (chapter and verse).
      - GET : Obtain all verses the from a given chapter.
      - POST : Given a verse from a chapter specifically in the request body is returned. (In JSON format)

Code example.:
```
router.get('/salmos/v/:id', async (req, res) => {
   <try {
     const id = await Salmo.find({"_id" : req.params.id},{verse: {$elemMatch : { "ID": 1 }}});
     return res.send( { id } );
   } catch (err) {
     return res.status(400).send({ error: 'Salmos Failed' });
   }
});
```
 
