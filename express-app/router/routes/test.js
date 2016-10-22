const express = require('express'),
      router = express.Router();
      router.get('/test', function(req, res) {
        res.render('test');
      });
      module.exports = router;
