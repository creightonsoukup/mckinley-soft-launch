  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService, $http, quotesService, shopifyService) {
    $scope.view = {}
    $scope.view.itemsInCart
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }
    shopifyService.getCart()
      .then((data) => {
        $scope.view.itemsInCart = data.lineItemCount
        $scope.$apply()
        shopifyService.updateCart(data)
      })

    $scope.view.boolChangeClass = false


    $scope.view.goShopping = () => {
      $location.path('/collection')
    }


  })
