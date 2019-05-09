## :pray: API PSALM to serve the book's psalm's app.<br /> 
**Also, will send push notification that contains a Verse specifically.**<br />
**The Chapter will be referenced when the Verse is sent.**<br />
**The purpose of this App is to motivate you to read a psalm every day. Leaving your day a little better in this troubled world.**

-------------------------------------------------------------------------------------------------------------------------------
*by Gabriel Ribas, Node.js and Python Developer.*

Basically this app was built with the following assumptions.:
- What was needed to do before ?
   1) Firstly we used the Python to scraping the bibleon website in xml and convert to JSON format.
   2) The JSON file was imported into mongodb.

- After ?
   1) We define the data model in Node.js (mogoose) Salmo.js, for example.:

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

   2) We created the routes in Noje.js (express module) to.:
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

-----------------------------------------------------------------------------------------------------------------------------------------------------------
APP PSalm git directoty struture.:
```
app-psalm 	# base project in node.js
app-psalm.bkp   # backup
.gitignore	# gitignore
README.md	# Readme
mongo.py	# Python script created to import JSON file into mongodb. 
		# Maybe will not be need because mongodb dump already exists in app-psalm/db.
		# You need import it
salmos.json	# PSalm json file for example.
scraping.py	# Python script to scraping the website
scraping.pyc	# ...
test.json	# JSON file test anything
teste.py	# Python script anything.
```
OBS: see the contents of the app-psalm directory.

Useful tools.:
- postman	# to test post and get
  - downloads:
     - [WINDOWS](https://dl.pstmn.io/download/latest/win64)
     - [LINUX](https://dl.pstmn.io/download/latest/linux64) 
- Robo 3T 1.3	# to run querys, if necessary.
  - downloads:
     - [LINUX](https://download-test.robomongo.org/linux/robo3t-1.3.1-linux-x86_64-7419c406.tar.gz)
     - [WINDOWS](https://download-test.robomongo.org/windows/robo3t-1.3.1-windows-x86_64-7419c406.exe)

