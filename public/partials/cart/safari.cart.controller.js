angular.module('MyApp')

  .controller('Cart', function ($scope, navigationService, shopifyService, quotesService){
    $scope.view = {}
    $scope.view.shoppingcart
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.lineItems
    $scope.view.checkoutUrl
    $scope.view.newQuantity
    $scope.view.itemsInCart
    shopifyService.getCart()
      .then(function (remoteCart) {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        $scope.view.itemsInCart = remoteCart.lineItemCount
        shopifyService.setStorage(remoteCart)
        shopifyService.updateCart($scope.view.shoppingcart)
        console.log($scope.view.lineItems)
        for (var i = 0; i < $scope.view.lineItems.length; i++) {
          $scope.view.lineItems[i].toggleTrash = false;
          $scope.view.lineItems[i].updatedQuantity = 0;
        }
      })
    $scope.view.updateQuantity = function (itemId, quantity) {
      console.log(itemId,quantity)
      shopifyService.updateItem(itemId, quantity)
      .then(function (remoteCart) {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        $scope.view.itemsInCart = remoteCart.lineItemCount
        shopifyService.updateCart($scope.view.shoppingcart)
        for (var i = 0; i < $scope.view.lineItems.length; i++) {
          $scope.view.lineItems[i].updatedQuantity = $scope.view.lineItems[i].quantity;
        }
      })
    }
    $scope.view.removeCartItem = function (itemId) {
      shopifyService.removeItem(itemId)
        .then(function (remoteCart) {
          $scope.view.shoppingcart = remoteCart
          $scope.view.lineItems = remoteCart.lineItems
          $scope.view.checkoutUrl = remoteCart.checkoutUrl
          shopifyService.updateCart($scope.view.shoppingcart)
        })
    }
    $scope.view.removeCart = function () {
      shopifyService.emptyCart()
        .then(function (remoteCart) {
          $scope.view.shoppingcart = remoteCart
          $scope.view.lineItems = remoteCart.lineItems
          $scope.view.checkoutUrl = remoteCart.checkoutUrl
          shopifyService.updateCart($scope.view.shoppingcart)

        })
    }
    $scope.view.getCheckoutUrl = function ()  {
      shopifyService.getCheckoutUrl()
    }

    $scope.view.showUpdate =


    $scope.view.toggleClass = function () {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

    $scope.view.toggleTrash = false

    $scope.view.show = false
    $scope.view.showUpdateButtons = function ()  {
      $scope.view.lineItems
    }


  })
