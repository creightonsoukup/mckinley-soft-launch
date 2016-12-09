angular.module('MyApp')

  .controller('Terms', function ($scope, quotesService, shopifyService) {
    $scope.view = {}
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.itemsInCart
    shopifyService.getCart()
      .then(function (data) {
        $scope.view.itemsInCart = data.lineItemCount
        $scope.$apply()
        shopifyService.updateCart(data)
      })

    _this.toggle = ""
    _this.toggleClass = function () {
      if (_this.toggle === "") {
        console.log("hello")
        return _this.toggle="show-nav"
      } else {
      return  _this.toggle=""
      }
    }
  })
