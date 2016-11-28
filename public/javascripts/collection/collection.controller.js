angular.module('MyApp')

  .controller('Collection', function ($scope, $location, $http, collectionService, navigationService, shopifyService) {
    $scope.view = {}
    shopifyService.getProducts()
      .then((data) => {
        $scope.view.products = data.data
        $scope.view.products.showDetails = false;
      })
      .catch(err => console.error(err))
    shopifyService.getCart
    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

  })
