angular.module('MyApp')

  .directive('gsShoppingCart', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/gsShoppingCart.html'
    }
  })
  .directive('gsNavBar', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/gsNavBar.html'
    }
  })
  
