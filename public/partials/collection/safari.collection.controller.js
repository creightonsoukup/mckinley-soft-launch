angular.module('MyApp')

  .controller('Collection', function ($scope, $location, $http, navigationService, shopifyService, quotesService) {
    $scope.view = {}
    $scope.view.products
    $scope.view.update = true
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.itemsInCart

    shopifyService.getCart()
      .then(function (data) {
        $scope.view.itemsInCart = data.lineItemCount
        $scope.$apply()
        shopifyService.updateCart(data)
      })
    shopifyService.getProducts()
     .then(function (data) {
       $scope.view.products = data
       $scope.$apply()
       console.log($scope.view.products)
     })
     .catch(function (err) {console.error(err)})

    $scope.view.toggle = ""
    $scope.view.toggleClass = function () {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

  })
