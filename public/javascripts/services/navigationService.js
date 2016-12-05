angular.module('MyApp')
.service('navigationService', function ($http, $location) {
  this.data = {}

  // this.isMobile = () => {
  //   this.data.window = $(window).width();
  //   console.log(this.data.window)
  //   if (this.data.window < 750) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
})
