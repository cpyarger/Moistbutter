const express = require('express'),
      router = express.Router();
      router.get('/blacklists', function(req, res) {
        res.render('blacklist');
      });
      module.exports = router;
