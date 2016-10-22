const express = require('express'),
      router = express.Router();
      router.get('/music', function(req, res) {
        res.render('music');
      });
      module.exports = router;
