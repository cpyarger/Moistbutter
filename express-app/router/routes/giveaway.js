const express = require('express'),
      router = express.Router();
      router.get('/giveaway', function(req, res) {
        console.log ("loading giveaway")
        res.render('giveaway');
      });
      module.exports = router;
