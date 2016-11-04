const express = require('express'),
router = express.Router();
nconf = require('nconf');

nconf.file('config.json');

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database.sqlite');



nconf.file({ file: 'local.json' });
var sets = nconf.get("settings:currency")

router.get('/currency', function(req, res) {

  db.serialize(function() {
    db.all("SELECT * FROM Followers", function(err, row) {
      console.log(row)
      res.render('currency',{
        data: row,
        sats: sets,
        classi: "currency"});
  });

  });
});

module.exports = router;
