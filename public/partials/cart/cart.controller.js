angular.module('MyApp')

  .controller('Cart', function ($scope, navigationService, shopifyService){
    $scope.view = {}
    $scope.view.shoppingcart
    $scope.view.lineItems
    $scope.view.checkoutUrl
    shopifyService.getCart()
      .then((remoteCart) => {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        shopifyService.setStorage(remoteCart)
        shopifyService.updateCart($scope.view.shoppingcart)
        console.log($scope.view.checkoutUrl)
      })
    $scope.view.updateQuantity = (itemId, quantity) => {
      shopifyService.updateItem(itemId, quantity)
      .then((remoteCart) => {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        shopifyService.updateCart($scope.view.shoppingcart)
      })
    }
    $scope.view.removeCartItem = () => {
      shopifyService.removeItem(itemId)
        .then((remoteCart) => {
          $scope.view.shoppingcart = remoteCart
          $scope.view.lineItems = remoteCart.lineItems
          $scope.view.checkoutUrl = remoteCart.checkoutUrl
          shopifyService.updateCart($scope.view.shoppingcart)
        })
    }
    $scope.view.removeCart = () => {
      shopifyService.emptyCart()
        .then((remoteCart) => {
          $scope.view.shoppingcart = remoteCart
          $scope.view.lineItems = remoteCart.lineItems
          $scope.view.checkoutUrl = remoteCart.checkoutUrl
          shopifyService.updateCart($scope.view.shoppingcart)
          $scope.$apply()
        })
    }
    $scope.view.getCheckoutUrl = () => {
      shopifyService.getCheckoutUrl()
    }

    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }
    $scope.view.show = false
    $scope.view.showUpdateButtons = () => {
      $scope.view.show = true
    }
    $scope.view.hideUpdateButtons = () => {
      $scope.view.show = false 
    }

  })
