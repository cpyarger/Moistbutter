const express = require('express'),
      router = express.Router();
      router.get('/integration', function(req, res) {
        res.render('integration');
      });
      module.exports = router;
