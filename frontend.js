'use strict';
const electron = require('electron');

const app = electron.app;
var express = require("express");
var appserver = express();
var twitches = require('./TwitchServer/twitches')
var request = require('request');
var path = __dirname + '/web/views/';
var followerss=new Array();
var latestFollow =new Array();
var placeholder = "http://fit.ie/fitnew/wp-content/uploads/2014/11/no-profile-image.jpg";
var classi ="";

//var twitchname=config.twitchname;
var profimage="https://static-cdn.jtvnw.net/jtv_user_pictures/cpyargerit-profile_image-485df366bb825b6c-300x300.jpeg"
var connected = 1
var fs    = require('fs'),
nconf = require('nconf');
var bodyParser = require('body-parser');
var url = require("url");
var mysql      = require('mysql');
nconf.file('config.json');
var connection = mysql.createConnection({
  host     : nconf.get('config:host'),
  user     : nconf.get('config:user'),
  password : nconf.get('config:password'),
  database : nconf.get('config:database')
});
appserver.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
appserver.use(express.static('public'));
appserver.use(bodyParser.urlencoded({ extended: true }));

appserver.set('view engine', 'ejs');

appserver.get('/myaction', function(req, res) {
  nconf.file({ file: '../config.json' });
  var params = url.parse(req.url,true).query;
  //console.log(params.twitchname)
  nconf.set('config:twitchname',params.twitchname)
  //console.log(params.twitchoauth)
  nconf.set('config:twitchoauth',params.twitchoauth)
  //console.log(params.botname)
  nconf.set('config:botname',params.botname)
  //console.log(params.botoauth)
  nconf.set('config:botoauth',params.botoauth)
  //console.log(params.twitchport)
  nconf.set('config:twitchport',params.twitchport)
  //console.log(params.twitchchannel)
  nconf.set('config:twitchchannel',params.twitchchannel)
  //console.log(params.discordport)
  nconf.set('config:discordport',params.discordport)
  //console.log(params.discordprotocol)
  nconf.set('config:discordprotocol',params.discordprotocol)
console.log(nconf.get());
  nconf.save();

  res.redirect(req.get('referer'));

});


//require('./posts')
appserver.post('/botcon', function(req, res) {
  connected =! connected
  console.log('connected: ' + connected)
  res.redirect(req.get('referer'));


});
appserver.post('/currhandle', function(req, res) {
  nconf.file({ file: 'local.json' });
  var x = nconf.get("settings:currency:enable")
  x=!x
  console.log('enabled?: ' + x)
  nconf.set("settings:currency:enable", x)
  nconf.save()
res.redirect(req.get('referer'));

});

appserver.post('/test', function (req, res) {
  console.log('Testing Loaded')
    console.log('works');
    console.log('');
    res.send(200)
});

appserver.post('/plus/:name', function(req, res) {
  connection.query('UPDATE Followers SET currency = currency+100 WHERE name=?',[req.params.name], function(error, results){
console.log(error)
});
    console.log('plus button pressed! for '+req.params.name);
    // Run your LED toggling code here
});

appserver.post('/minus/:name', function(req, res) {
  connection.query('UPDATE Followers SET currency = currency-100 WHERE name=?',[req.params.name], function(error, results){
    console.log(error)
    });
    console.log('Minus button pressed for '+req.params.name);
});
appserver.post('/updatePoints', function(req, res) {
  nconf.file({ file: 'local.json' });
  var xx=nconf.get("settings:currency:points");
  connection.query('UPDATE Followers SET currency = currency+?',[xx], function(error, results){

    console.log(error);
    console.log(results);
  });
  connection.query('UPDATE Followers SET currency = 100 where currency is NULL ;  ', function(error, results){
    console.log(error);
    console.log(results);
  });
});
appserver.post('/points/:point/:min', function(req, res) {
    console.log('Points set at '+req.params.point);
    console.log('Minutes set at '+req.params.min);
    nconf.file({ file: 'local.json' });

  var sets = nconf.get("settings:currency")
  nconf.set("settings:currency:points", req.params.point);
  nconf.set("settings:currency:mins", req.params.min);
  nconf.save();
});





appserver.get('/', function(req, res) {
//get latest follower

connection.query('SELECT * FROM Followers ORDER BY id DESC LIMIT 1;', function(error, results){
            result = results;
            console.log(JSON.stringify(result));

  res.render('pages/index', {
      follow: result,
      classi: "overview"
    });
  });
});

appserver.get("/profile",function(req,res){
  res.render('pages/profile',{
    classi: "profile",
    profimage: profimage,
    twitchname: twitchname
  });
});
appserver.get("/settings",function(req,res){
console.log('Settings Loaded')
nconf.file({ file: 'config.json' });

var y=0;
var z=new Array();
var x=nconf.get('config');
for (var key in x) {
if (x.hasOwnProperty(key)) {
  //console.log(key + " -> " + x[key]);
  var tmps = {
    "key" : key,
    "value" : x[key]
  };
  y=y+1
  z.push(tmps);
}
}
  //nconf.use('file',{file:'config.json'});
  res.render('pages/settings',{
    set: z,
    classi: "settings"
  });
});

appserver.get('/settings.json',function(req,res){
nconf.file({ file: 'config.json' });
var x=nconf.get('config');

res.send(x);
});
appserver.get("/help",function(req,res){
  res.render('pages/help',{
    classi: "help"
  });
});
appserver.get("/about",function(req,res){
  res.render('pages/about',{
    classi: "about"
  });
});

appserver.get("/contact",function(req,res){
  res.render('pages/contact',{
    classi: "contact"
  });
});

appserver.get("/followers",function(req,res){
var result;

          connection.query('SELECT * FROM Followers', function(error, results){
                      result = results;

  res.render('pages/followers', {
      data: result,
      classi: "followers"
});
});                    });

appserver.get("/giveaway",function(req,res){
  console.log('Giveaway Loaded')
  res.render('pages/giveaway',{
    classi: "giveaway"
  });
});

appserver.get("/currency",function(req,res){
  nconf.file({ file: 'local.json' });
  console.log('Currency Loaded')
  console.log()
  var result;
var sets = nconf.get("settings:currency")
console.log(sets);
            connection.query('SELECT * FROM Followers', function(error, results){
                        result = results;

  res.render('pages/currency',{
    data: result,
    sats: sets,
    classi: "currency"
  });
});
});

appserver.get("/music",function(req,res){
  console.log('Music Loaded')
  res.render('pages/music',{
    classi: "music"
  });
});

appserver.get("/integration",function(req,res){
  console.log('Integration Loaded')
  res.render('pages/integration',{
    classi: "integration"
  });
});

appserver.get("/quotes",function(req,res){
  console.log('Quotes Loaded')
  res.render('pages/quotes',{
    classi: "quotes"
  });
});

appserver.get("/timers",function(req,res){
  connection.query('SELECT * FROM timers', function(error, timers){
    connection.query('SELECT * FROM timertype', function(error, types){
      console.log('Timers Loaded')
      res.render('pages/timers',{
        classi: "timers",
        timers: timers,
        type: types
      });
    });
  });

});

appserver.get("/commands",function(req,res){
  console.log('Commands Loaded')
nconf.file({ file: 'Databases/commands.json' });
  //nconf.use('file',{file:'config.json'});


var y=0;
var z=new Array();
var x=nconf.get('command');
for (var key in x) {
if (x.hasOwnProperty(key)) {
  //console.log(key + " -> " + x[key]);
  var tmps = {
    "command" : key,
    "result" : x[key]
  };
  y=y+1
  z.push(tmps);
}
}
  res.render('pages/commands',{
    coms: z,
    classi: "commands"
  });

  //console.log(x);

//console.log(y);
});

appserver.get("/variables",function(req,res){
connection.query('SELECT * FROM variables', function(error, results){
  console.log('Variables Loaded')
  console.log(JSON.stringify(results));
  res.render('pages/variables',{
    vars: results,
    classi: "variables"
  });
  });
});

appserver.get("/blacklists",function(req,res){
  console.log('blacklists Loaded')
  res.render('pages/blacklist',{
    classi: "blacklists"
  });
});

appserver.get("/remote",function(req,res){
  console.log('Remote Loaded')
  res.render('pages/remote',{
    classi: "remote"
  });

});

appserver.get("/groups",function(req,res){
  console.log('Groups Loaded')
  connection.query('SELECT * FROM UserLevels', function(error, results){

  res.render('pages/groups',{
    groups: results,
    classi: "groups"
  });
  });
});

appserver.get("/games",function(req,res){
  console.log('Games Loaded')
  res.render('pages/games',{
    classi: "games"
  });
});
appserver.get("/viewoverlay",function(req,res){
  console.log('Overlay Preview Page Loaded')
  res.render('pages/viewoverlay',{
    classi: "viewoverlay"
  });
});
appserver.get("/setupoverlay",function(req,res){
  console.log('Overlay setup page Loaded')
  res.render('pages/setupoverlay',{
    classi: "setupoverlay"
  });
});
appserver.get("/test",function(req,res){
  console.log('test Loaded')
  res.send(200)
});

appserver.use("*",function(req,res){
  console.log('404 Error')
  res.render('pages/404')
});


// adds debug features like hotkeys for triggering dev tools and reload
//require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 1024,
		height: 768
	});
	win.loadURL(`file://${__dirname}/index.html`)

	//win.loadURL('http://localhost:3000');
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
