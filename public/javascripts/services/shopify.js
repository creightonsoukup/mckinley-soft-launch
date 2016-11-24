angular.module('MyApp')

  .service('shopifyService', function ($http, $q) {
      this.data = {}
      this.getCart = () => $http.get('http://localhost:8000/cart')
      this.requestAddToCart = (item) => {
        console.log(item)
        var data = $.param(item)
        return $http.post('http://localhost:8000/addtocart', data)
          // .success(console.log('successsss'))
        }
      this.getProducts = () => $http.get('http://localhost:8000/products')

      this.getSingleProduct = (id) => $http.get('http://localhost:8000/singleproduct/' + id)

      this.createLineItemObject = (variantObject, quantity) => {
          var item = {}
          item.variant = variantObject
          item.quantity = quantity
          return item
      }


      // this.addToCart = ()

    //function to update cart item

    //function to delete cart item

    //function to checkout Url

    //function to get cart items
  })
