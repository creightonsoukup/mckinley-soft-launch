angular.module('MyApp')

  .controller('Terms', function ($scope, quotesService) {
    $scope.view = {}
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
