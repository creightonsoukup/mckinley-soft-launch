var express = require('express');
var router = express.Router();
var Shopify = require('shopify-api-node');
var ShopifyBuy = require('shopify-buy');


const shopClient = ShopifyBuy.buildClient({
  apiKey: '365f1f4c8ba81b764b8345a6f46af6a2',
  appId: '6',
  domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
});

var product;
var cart;
var cartLineItemCount;

if(localStorage.getItem('lastCartId')) {
  shopClient.fetchCart(localStorage.getItem('lastCartId')).then(function(remoteCart) {
    cart = remoteCart;
    cartLineItemCount = cart.lineItems.length;
  });
} else {
  shopClient.createCart().then(function (newCart) {
    cart = newCart;
    Window.localStorage.setItem('lastCartId', cart.id);
    cartLineItemCount = 0;
  });
}
console.log(cart)



/* GET home page. */

router.get('/cart', function (req, res, next) {
    shopClient.createCart()
      .then((newCart) => {
        cart = newCart
        cartLineItemCount = 0
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
  console.log("hello")
  console.log(req.body.item)
  cart.createLineItemsFromVarients(req.body.item)
    .then(data => console.log(data))
});




module.exports = router;
