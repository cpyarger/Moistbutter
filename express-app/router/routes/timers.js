const express = require('express'),
      router = express.Router();
      router.get('/timers', function(req, res) {
        res.render('timers');
      });
      module.exports = router;
