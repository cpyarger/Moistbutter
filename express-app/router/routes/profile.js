const express = require('express'),
 request = require('request'),

      router = express.Router();
      nconf = require('nconf');

      nconf.file('config.json');
      profimage=nconf.get("config:profimage")
      twitchname=nconf.get("config:twitchname")
      oauth=nconf.get("config:twitchoauth")
      cid=nconf.get("config:clientID")

      profimage=nconf.get("config:profimage")
      twitchname=nconf.get("config:twitchname")
      oauth=nconf.get("config:twitchoauth")
  cid=nconf.get("config:clientID")

        router.get('/profile', function(req, res) {

  kraken = request.defaults({
              baseUrl: 'https://api.twitch.tv/kraken/users/',
              headers: {
                      'Accept': 'application/vnd.twitchtv.v3+json',
                      'Client-ID': cid
                  },
              json: true
          })



  kraken(twitchname, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.logo) // Show the HTML for the Google homepage.
      res.render('profile',{
        profimage: body.logo,
        twitchname: twitchname
      });
    }
  })



      });
      module.exports = router;
