var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'aws.cpyarger.com',
  user     : 'bot',
  password : 'banana123',
  database : 'MoistButter'
});

//increment currency
connection.query('UPDATE Followers SET currency = currency+5 WHERE name= "Bees_Art"  ;  ', function(error, results){
  console.log(error);
  console.log(results);
});
connection.query('UPDATE JustTesting SET inti = inti + 1;  ', function(error, results){
  console.log(error);
  console.log(results);
});

connection.query('SELECT * FROM JustTesting ;', function(error, results){
  console.log(JSON.stringify(results));
});

connection.end();
