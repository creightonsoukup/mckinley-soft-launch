var express = require('express');
var router = express.Router();
var ShopifyBuy = require('shopify-buy');

router.get('/quote', function(req,res,next) {
  http.get({
    url: 'http://quotes.rest/quote?minlength=100&maxlength=300',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-TheySaidSo-Api-Secret': 'P2LzVd34DJjYaM9iMBk6JweF'
    }
  }).then((data) => res.send(data))
})


module.exports = router;


// P2LzVd34DJjYaM9iMBk6JweF
