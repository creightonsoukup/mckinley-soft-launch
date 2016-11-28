  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService ) {
    $scope.view = {}

    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }
  })
