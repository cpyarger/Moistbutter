const express = require('express'),
      router = express.Router();
      router.get('/currency', function(req, res) {
        res.render('currency');
      });
      module.exports = router;
