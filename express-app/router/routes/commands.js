const express = require('express'),
      router = express.Router();
      router.get('/commands', function(req, res) {
        res.render('commands');
      });
      module.exports = router;
