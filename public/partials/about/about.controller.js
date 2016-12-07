angular.module('MyApp')

  .controller('About', function ($scope, $location, quotesService) {

    var _this = this;

    $scope.view = {}

    _this.someOptions = {
      navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 1000
    }
    $scope.view.quotes = quotesService.pickRandomQuote()
    _this.toggle = ""
    _this.toggleClass = () => {
      if (_this.toggle === "") {
        console.log("hello")
        return _this.toggle="show-nav"
      } else {
      return  _this.toggle=""
      }
    }
  })
