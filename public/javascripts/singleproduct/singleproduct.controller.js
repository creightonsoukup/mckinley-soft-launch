angular.module('MyApp')

  .controller('SingleProduct', function ($scope, $location, $http, $routeParams, shopifyService) {
    $scope.view = {}
    $scope.view.id = $routeParams.id
    shopifyService.getSingleProduct($scope.view.id)
      .then((data) => {
        console.log(data)
        $scope.view.product = data.data
        $scope.view.variant = $scope.view.product["attrs"]["variants"][0]
      })
      .catch(err => console.error(err))
    $scope.view.addToCart = (variant, quantity) => {
      shopifyService.requestAddToCart(variant, quantity)
        .success(console.log("success"))
    }
  })
