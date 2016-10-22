const express = require('express'),
      router = express.Router();
      router.get('/setupoverlay', function(req, res) {
        res.render('setupoverlay');
      });
      module.exports = router;
