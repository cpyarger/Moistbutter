const express = require('express'),
      router = express.Router();
      router.get('/games', function(req, res) {
        res.render('games');
      });
      module.exports = router;
