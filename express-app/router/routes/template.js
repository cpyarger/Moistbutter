const express = require('express'),
      router = express.Router();
      router.get('/template', function(req, res) {
        res.render('template');
      });
      module.exports = router;
