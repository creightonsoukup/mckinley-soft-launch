var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/collection', function(req, res, next) {
  res.render('collection')
})



module.exports = router;
