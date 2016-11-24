angular.module('MyApp')

  .controller('Cart', function ($scope, navigationService){
    $scope.view = {}
    client.createCart().then(cart => {console.log(cart)});


  })
