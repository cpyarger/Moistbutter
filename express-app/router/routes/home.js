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

//GET home page.
var result;


router.get('/', function(req, res) {
  connection.query('SELECT * FROM Followers ORDER BY id DESC LIMIT 1;', function(error, results){
              result = results;

  res.render('index', result[0]);
});
});
module.exports = router;
