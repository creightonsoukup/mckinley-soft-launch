angular.module('MyApp', ['ngRoute', 'ngMessages', 'fullPage.js', 'ngAnimate', 'ui.bootstrap'])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/javascripts/home/home.template.html',
        controller: 'Home',
        controllerAs: 'vm'
      })
      .when('/collection', {
        templateUrl: '/javascripts/collection/collection.template.html',
        controller: 'Collection'
      })
      .when('/about', {
        controller: 'About',
        templateUrl: '/javascripts/about/about.template.html'
      })
      .when('/cart', {
        controller: 'Cart',
        tempateUrl: '/javascripts/cart/cart.template.html'
      })
      .when('/product/:id', {
        controller: 'SingleProduct',
        templateUrl: '/javascripts/singleproduct/singleproduct.template.html'
      })
    $locationProvider.html5Mode(true);

  });
