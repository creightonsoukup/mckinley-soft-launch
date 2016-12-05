angular.module('MyApp')

  .controller('Collection', function ($scope, $location, $http, navigationService, shopifyService) {
    $scope.view = {}
    $scope.view.products
    $scope.view.update = true

    shopifyService.getCart()
    shopifyService.getProducts()
     .then((data) => {
       $scope.view.products = data
       $scope.$apply()
       console.log($scope.view.products)
     })
     .catch(err => console.error(err))

    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

  })
