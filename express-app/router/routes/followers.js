const express = require('express'),
router = express.Router();

nconf = require('nconf');
var mysql      = require('mysql');
nconf.file('config.json');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.sqlite');


router.get('/followers', function(req, res) {
  db.serialize(function() {
    db.all("SELECT * FROM Followers", function(err, row) {
      console.log(row)
     res.render('followers', {
       data: row,
       title: "Followers"
       });
   });
  });




});

module.exports = router;
