angular.module('MyApp')


  .controller('About', function ($scope, $location) {



    var _this = this;

    _this.someOptions = {
      navigation: true,
      navigationPosition: 'right',
      scrollingSpeed: 1000
    }

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
