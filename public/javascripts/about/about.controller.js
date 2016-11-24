angular.module('MyApp')

  .controller('About', function ($scope, $location, navigationService ) {
    $scope.view = {}

    var _this = this;

    client.createCart().then(cart => {console.log(cart)});

    _this.someOptions = {
      navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 1000
    }
  })
