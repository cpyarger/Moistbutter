const express = require('express'),
      router = express.Router();
      router.get('/quotes', function(req, res) {
        res.render('quotes');
      });
      module.exports = router;
