var express = require('express');
var router = express.Router();
var Shopify = require('shopify-api-node');
var ShopifyBuy = require('shopify-buy');

const shopClient = ShopifyBuy.buildClient({
  apiKey: '365f1f4c8ba81b764b8345a6f46af6a2',
  appId: '6',
  domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
});

var cart

router.get('/newcart', function (req, res, next) {
    shopClient.createCart()
      .then((newCart) => {
        cart = newCart
        console.log(cart)
        res.send(newCart)
      })
      .catch(err => console.error(err))
    })

router.post('/retrievecart', function (req, res, next) {
  console.log(req.body.cartId)
  shopClient.fetchRecentCart()
    .then((remoteCart) => {
      cart = remoteCart
      res.send(cart)
    })
    .catch(err => console.error(err))
})


router.get('/products', function (req, res, next) {
  shopClient.fetchAllProducts()
    .then(product => res.send(product))
    .catch(err => console.error(err))
})

router.get('/singleproduct/:id', function (req, res, next) {
  shopClient.fetchProduct(req.params.id)
    .then(product => res.send(product))
    .catch(err => console.error(err))
})

router.post('/addtocart', function (req, res, next) {
  console.log(req.body.variant.id)
  console.log(req.body.quantity)
  cart.createLineItemsFromVariants({variant: req.body.variant.id, quantity: req.body.quantity})
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/updatecart', function (req, res, next) {
  
})




module.exports = router;
