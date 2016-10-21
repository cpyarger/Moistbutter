var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'aws.cpyarger.com',
  user     : 'bot',
  password : 'banana123',
  database : 'MoistButter'
});
var express = require("express");
var app = express();
//var config = require('./config');
//var twitches = require('./twitches')
var request = require('request');
var path = __dirname + '/views/';
var fs    = require('fs'),
nconf = require('nconf');
nconf.file({ file: './config.json' });
    var url="https://api.twitch.tv/kraken/channels/cpyargerit/follows";

var placeholder = "http://fit.ie/fitnew/wp-content/uploads/2014/11/no-profile-image.jpg";

var twitchname=nconf.get("config:twitchname");
var cid=nconf.get("config:clientID");

var profimage="https://static-cdn.jtvnw.net/jtv_user_pictures/cpyargerit-profile_image-485df366bb825b6c-300x300.jpeg"

console.log(cid)

connection.connect();
connection.query('SELECT 1', function(err, rows) {
  // connected! (unless `err` is set)
  if (err) throw err;
});

          connection.query('SELECT * FROM Followers', function(err, results) {
if (err) throw err;
console.log("Query results(outside): " + JSON.stringify(results))
          });
