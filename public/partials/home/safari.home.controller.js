  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService, $http, quotesService, shopifyService) {
    $scope.view = {}
    $scope.view.itemsInCart
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.toggle = ""
    $scope.view.toggleClass = function () {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }
    shopifyService.getCart()
      .then( function (data) {
        $scope.view.itemsInCart = data.lineItemCount
        $scope.$apply()
        shopifyService.updateCart(data)
      })

    $scope.view.boolChangeClass = false


    $scope.view.goShopping = function () {
      $location.path('/collection')
    }


  })
