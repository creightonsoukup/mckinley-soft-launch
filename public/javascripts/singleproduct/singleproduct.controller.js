angular.module('MyApp')

  .controller('SingleProduct', function ($scope, $location, $http, $routeParams, shopifyService) {
    $scope.view = {}
    $scope.view.id = $routeParams.id
    shopifyService.getSingleProduct($scope.view.id)
      .then((data) => {
        $scope.view.product = data.data
        $scope.variantObject = data.data["attrs"]["variants"][0]
      })
      .catch(err => console.error(err))
    $scope.view.addToCart = (quantity) => {
      item = shopifyService.createLineItemObject($scope.variantObject, quantity)
      shopifyService.requestAddToCart(item)
        .success(console.log("success"))
    }
  })
