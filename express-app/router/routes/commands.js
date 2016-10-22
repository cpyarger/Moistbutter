const express = require('express'),
      router = express.Router();
      router.get('/commands', function(req, res) {

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
        };
      };

        res.render('commands',{
          coms: z,
          classi: "commands"
        });
      });
      module.exports = router;
