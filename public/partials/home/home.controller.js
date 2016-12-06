  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService, $http) {
    $scope.view = {}
    $scope.view.quote = {}
    // $http.get({
    //   url: 'http://quotes.rest/quote?minlength=100&maxlength=300',
    //   method: 'get',
    //   headers: {
    //     'Accept': 'application/json',
    //     'X-TheySaidSo-Api-Secret': 'P2LzVd34DJjYaM9iMBk6JweF'
    //   }
    // })
      // .then((data) => console.log(data))
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
