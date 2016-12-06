angular.module('MyApp')

  .controller('SingleProduct', function ($scope, $location, $http, $routeParams, shopifyService) {
    $scope.view = {}
    $scope.view.cart = {}
    shopifyService.getCart()
      .then((remoteCart) => {
        $scope.view.cart = remoteCart
        $scope.$apply()
        shopifyService.updateCart(remoteCart)
      })
    // $scope.$watch('shopifyService.data.cart', function () {
    //   $scope.view.cart = shopifyService.data.cart
    // })
    $scope.view.id = $routeParams.id


    shopifyService.getSingleProduct($scope.view.id)
      .then((data) => {
        $scope.view.product = data
        $scope.$apply()
        $scope.view.variant = $scope.view.product["attrs"]["variants"][0]
        $scope.view.description = $scope.view.product.description
      })
      .catch(err => console.error(err))
    $scope.view.quantity = 1;
    $scope.view.addToCart = (quantity) => {
      shopifyService.requestAddToCart($scope.view.variant, quantity)
      $location.path('/cart')
    }
      // $scope.view.toggleClass()

    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

    $scope.view.showDetails = true
    $scope.view.buttonText = "Show Details"
    $scope.view.showProductDetails = () => {
      if ($scope.view.showDetails === true ) {
        $scope.view.showDetails = false
        $scope.view.buttonText = "Hide Details"
      } else {
        $scope.view.showDetails = true
        $scope.view.buttonText = "Show Details"
      }

    }

  })
