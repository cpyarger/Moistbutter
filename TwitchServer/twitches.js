var express = require("express");
var app = express();
//var config = require('./config');
var twitches = require('./twitches')
var request = require('request');
var path = __dirname + '/views/';
var fs    = require('fs'),
    nconf = require('nconf');
nconf.file({ file: '../config.json' });

var lfol=new Array();
var placeholder = "http://fit.ie/fitnew/wp-content/uploads/2014/11/no-profile-image.jpg";
var classi ="";
var twitchname=nconf.get("config:twitchname");
var cid=nconf.get("config:clientID");
var tmp=new Array();
var profimage="https://static-cdn.jtvnw.net/jtv_user_pictures/cpyargerit-profile_image-485df366bb825b6c-300x300.jpeg"
  module.exports = {


//returns latest follower (twitch)
Latest: function Latest(){
  console.log('getting latest twitch follower')
var url="https://api.twitch.tv/kraken/channels/"+twitchname+"/follows";
  request({
  url: url,
  json: true,
  headers:{
    'Client-ID':cid
  },
}, function (error, response, body) {

  if (!error && response.statusCode === 200) {
        var i=0
        var followerImage = body.follows[i].user.logo;
        if(!followerImage){
          followerImage=placeholder
        }
        var tmps = {
          "name" : body.follows[i].user.display_name,
          "image" : followerImage
        };
        lfol=tmps;
      }

})
  return lfol;
},

// Returns list of all followers on twitch

followers: function followers(){
  console.log('Getting twitch followers')
var followerss=new Array();
    var url="https://api.twitch.tv/kraken/channels/cpyargerit/follows";


      request({
      url: url,
      json: true,
      headers: { 'Client-ID': 'ksyizvjpazyrcm337bjwg4r9e41kh63' }
  }, function (error, response, body) {

      if (!error && response.statusCode === 200) {

          for (var i = 0; i < body.follows.length; i++) {
            var followerImage = body.follows[i].user.logo;
            if(!followerImage){
              followerImage=placeholder
            }
            var tmps = {
              "name" : body.follows[i].user.display_name,
              "image" : followerImage
            };
            followerss.push(tmps);
            tmp=followerss;

          }

      }

})
return tmp

  },

TwitchChat: function TwitchChat(){
console.log("twitch chat")

}




};
