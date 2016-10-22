const express = require('express'),
router = express.Router();

nconf = require('nconf');
var mysql      = require('mysql');
nconf.file('config.json');
var connection = mysql.createConnection({
  host     : nconf.get('config:host'),
  user     : nconf.get('config:user'),
  password : nconf.get('config:password'),
  database : nconf.get('config:database')
  });


router.get('/followers', function(req, res) {
  connection.query('SELECT * FROM Followers', function(error, results){
    result = results;
    res.render('followers', {
      data: result,
      title: "Followers"
      });

    });
});

module.exports = router;
