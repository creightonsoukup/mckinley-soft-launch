  angular.module('MyApp')

  .controller('Home', function ($scope, $location, navigationService, $http) {
    $scope.view = {}
    $scope.view.quote = {}
    $http({
      url: 'http://quotes.rest/quote?minlength=100&maxlength=300',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-TheySaidSo-Api-Secret': 'P2LzVd34DJjYaM9iMBk6JweF'
      }
    }).then((data) => {
      console.log(data.data.contents)
      $scope.view.quote.text = data.data.contents.quote
      $scope.view.quote.author = data.data.contents.author
      console.log($scope.view.quote.text, $scope.view.quote.author)
    })
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
