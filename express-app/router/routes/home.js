const express = require('express'),
      router = express.Router();
      nconf = require('nconf');
      var mysql      = require('mysql');
      nconf.file('config.json');
      var sqlite3 = require('sqlite3').verbose();
      var db = new sqlite3.Database('database.sqlite');





router.get('/', function(req, res) {
  db.serialize(function() {
    db.get("SELECT * FROM Followers ORDER BY id DESC LIMIT 1", function(err, row) {
     res.render('index', row);
   });
  });
});

module.exports = router;
