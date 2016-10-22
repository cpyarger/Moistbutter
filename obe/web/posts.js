var express = require("express");
var app = express();
app.post('/botcon', function(req, res) {
  connected =! connected
  console.log('connected: ' + connected)
  res.redirect(req.get('referer'));


});


app.post('/test', function (req, res) {
  console.log('Testing Loaded')
    console.log('works');
    console.log('');
    res.send(200)
});

app.post('/minus', function(req, res) {
    console.log('minus button pressed! for ');
    console.log(req)
    // Run your LED toggling code here
});

app.post('/plus', function(req, res) {
    console.log('plus button pressed for');
    // Run your LED toggling code here
});
