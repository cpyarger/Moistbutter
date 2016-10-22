const express = require('express'),
      router = express.Router();
      
      router.get('/giveaway', function(req, res) {
        console.log ("loading giveaway");
        res.render('giveaway', ['title' , 'giveaway']);
      });

      module.exports = router;
