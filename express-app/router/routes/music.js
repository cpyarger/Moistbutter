const express = require('express'),
      router = express.Router();
      router.get('/remote', function(req, res) {
        res.render('remote');
      });
      module.exports = router;
