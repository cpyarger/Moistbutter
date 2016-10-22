const express = require('express'),
      router = express.Router();
      router.get('/viewoverlay', function(req, res) {
        res.render('viewoverlay');
      });
      module.exports = router;
