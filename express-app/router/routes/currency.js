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
nconf.file({ file: 'local.json' });
var sets = nconf.get("settings:currency")

router.get('/currency', function(req, res) {
  connection.query('SELECT * FROM Followers', function(error, results){
    result = results;
    res.render('currency',{
      data: result,
      sats: sets,
      classi: "currency"
    });
  });
});

module.exports = router;
