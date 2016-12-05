angular.module('MyApp')

  .service('shopifyService', function ($http, $q, $location) {
      this.data = {}
      this.data.products = []
      this.data.cart = {}
      this.data.cartLineItemCount = {}
      this.data.cartLineItemsIds = []

      const shopClient = ShopifyBuy.buildClient({
        apiKey: '365f1f4c8ba81b764b8345a6f46af6a2',
        appId: '6',
        domain: 'madison-mckinley-designs-pre-launch.myshopify.com'
      });

      this.getCart = () => {
          if(localStorage.getItem('MckinleyCartId')) {
            var cartId = localStorage.getItem('MckinleyCartId')
            return shopClient.fetchRecentCart(cartId)
          } else {
            return shopClient.createCart()
          }
      }

      this.requestAddToCart = (variantObj, quantity) => {
          return this.data.cart.createLineItemsFromVariants({variant: variantObj, quantity: quantity})
            .then((remoteCart) => {
              this.data.cart = remoteCart
              console.log(this.data.cart)
            })
      }

      this.updateCart = (remoteCart) => {
        this.data.cart = remoteCart
      }

      this.getProducts = () => shopClient.fetchAllProducts()

      this.getSingleProduct = (id) => shopClient.fetchProduct(id)

      this.emptyCart = () => this.data.cart.clearLineItems()

      this.removeItem = (itemId) => this.data.cart.removeLineItem(itemId)

      this.updateItem = (itemId, quantity) => this.data.cart.updateLineItem(itemId, quantity)

      this.setStorage = (remoteCart) => {
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
