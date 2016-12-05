angular.module('MyApp')

  .directive('gsShoppingCart', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/directives/gsShoppingCart.html'
    }
  })
  .directive('gsNavBar', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/directives/gsNavBar.html'
    }
  })
  .directive('gsFooter', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/directives/gsFooter.html'
    }
  })
  .directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 300) {
                 scope.view.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.view.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
  });
