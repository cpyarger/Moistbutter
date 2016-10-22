const express = require('express'),
      router = express.Router();
      router.get('/followers', function(req, res) {
        res.render('followers');
      });
      module.exports = router;
