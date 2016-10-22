const express = require('express'),
      router = express.Router();
      router.get('/groups', function(req, res) {
        res.render('groups');
      });
      module.exports = router;
