  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService, $http, quotesService) {
    $scope.view = {}
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

    $scope.view.boolChangeClass = false


    $scope.view.goShopping = () => {
      $location.path('/collection')
    }


  })
