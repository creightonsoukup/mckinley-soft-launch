angular.module('MyApp')

  .controller('Cart', function ($scope, navigationService, shopifyService, quotesService){
    $scope.view = {}
    $scope.view.shoppingcart
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.lineItems
    $scope.view.checkoutUrl
    $scope.view.newQuantity
    shopifyService.getCart()
      .then((remoteCart) => {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        shopifyService.setStorage(remoteCart)
        shopifyService.updateCart($scope.view.shoppingcart)
        console.log($scope.view.lineItems)
        for (var i = 0; i < $scope.view.lineItems.length; i++) {
          $scope.view.lineItems[i].toggleTrash = false;
          $scope.view.lineItems[i].updatedQuantity = 0;
        }
      })
    $scope.view.updateQuantity = (itemId, quantity) => {
      console.log(itemId,quantity)
      shopifyService.updateItem(itemId, quantity)
      .then((remoteCart) => {
        $scope.view.shoppingcart = remoteCart
        $scope.view.lineItems = remoteCart.lineItems
        $scope.view.checkoutUrl = remoteCart.checkoutUrl
        shopifyService.updateCart($scope.view.shoppingcart)
        for (var i = 0; i < $scope.view.lineItems.length; i++) {
          $scope.view.lineItems[i].updatedQuantity = $scope.view.lineItems[i].quantity;
        }
      })
    }
    $scope.view.removeCartItem = (itemId) => {
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

        })
    }
    $scope.view.getCheckoutUrl = () => {
      shopifyService.getCheckoutUrl()
    }

    $scope.view.showUpdate =


    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

    $scope.view.toggleTrash = false

    $scope.view.show = false
    $scope.view.showUpdateButtons = () => {
      $scope.view.lineItems
    }


  })
