angular.module('MyApp')

  .controller('Collection', function ($scope, $location, $http, collectionService, navigationService, shopifyService) {
    $scope.view = {}
    shopifyService.getProducts()
      .then((data) => {
        $scope.view.products = data.data
      })
      .catch(err => console.error(err))
    // shopifyService.addToCart("Test 1", 4)
    //   .then(data => $scope.view.cart 
  })
