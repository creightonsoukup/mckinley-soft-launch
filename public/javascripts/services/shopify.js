angular.module('MyApp')

  .service('shopifyService', function ($http, $q) {
      this.data = {}
      this.data.cart
      this.data.product
      this.data.cartLineItemCount

      this.getCart = () => {
        if(localStorage.getItem('MckinleyCartId')) {
          var cartId = localStorage.getItem('MckinleyCartId')
          $http.post('/retrievecart', {cartId: cartId})
            .success((remotecart) => {console.log(remotecart)})
          // this.data.cartLineItemCount = this.data.cart.attrs.lineItems.length;
    
        } else {
          $http.get('/newcart')
            .then((newCart) => {
              this.data.cart = newCart
              console.log(this.data.cart)
              localStorage.setItem('MckinleyCartId', this.data.cart.data["attrs"]["shopify-buy-uuid"])
            })
        }
      }

      this.requestAddToCart = (variant, quantity) => {
        return $http({
          url: 'http://localhost:8000/addtocart',
          data: {
            variant: variant,
            quantity: quantity
          },
          method: "POST"
        })
      }

      this.getProducts = () => $http.get('http://localhost:8000/products')

      this.getSingleProduct = (id) => $http.get('http://localhost:8000/singleproduct/' + id)



      // this.addToCart = ()

    //function to update cart item

    //function to delete cart item

    //function to checkout Url

    //function to get cart items
  })
