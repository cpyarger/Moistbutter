const express = require('express'),
      router = express.Router();
      router.get('/variables', function(req, res) {
        res.render('variables');
      });
      module.exports = router;
