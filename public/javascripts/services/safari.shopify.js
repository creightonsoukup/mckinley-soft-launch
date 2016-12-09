angular.module('MyApp')

  .service('shopifyService', function ($http, $q, $location) {
      this.data = {}
      this.data.products = []
      this.data.cart = {}
      this.data.cartLineItemCount = {}
      this.data.cartLineItemsIds = []

      var shopClient = ShopifyBuy.buildClient({
        apiKey: '365f1f4c8ba81b764b8345a6f46af6a2',
        appId: '6',
        domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
      });

      this.getCart = function () {
          if(localStorage.getItem('MckinleyCartId')) {
            var cartId = localStorage.getItem('MckinleyCartId')
            return shopClient.fetchRecentCart(cartId)
          } else {
            return shopClient.createCart()
          }
      }

      this.requestAddToCart = function (variantObj, quantity, photoArray) {
          return this.data.cart.createLineItemsFromVariants({variant: variantObj, quantity: quantity})
            .then( function (remoteCart) {
              this.data.cart = remoteCart
              this.data.photos = photoArray
              console.log(this.data.cart)
            })
      }

      this.updateCart = function (remoteCart) {
        this.data.cart = remoteCart
      }

      this.getProducts = function () { return shopClient.fetchAllProducts()}

      this.getSingleProduct = function (id) {return shopClient.fetchProduct(id)}

      this.emptyCart = function () { return this.data.cart.clearLineItems()}

      this.removeItem = function  (itemId) {return this.data.cart.removeLineItem(itemId)}

      this.updateItem = function (itemId, quantity) { return this.data.cart.updateLineItem(itemId, quantity)}

      this.setStorage = function (remoteCart) {
        var cart = remoteCart
        if (!localStorage.getItem('MckinleyCartId')) {
          var cart = remoteCart
          cart.id = cart["attrs"]["shopify-buy-uuid"]
          localStorage.setItem('MckinleyCartId', cart.id)
        } else {
          console.log('else')
        }
      }
  })
