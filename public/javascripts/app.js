angular.module('MyApp', ['ngRoute', 'ngMessages', 'fullPage.js', 'ngAnimate'])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home/home.template.html',
        controller: 'Home'
      })
      .when('/collection', {
        templateUrl: '/partials/collection/collection.template.html',
        controller: 'Collection'
      })
      .when('/about', {
        controller: 'About',
        templateUrl: '/partials/about/about.template.html',
        controllerAs: 'vm'

      })
      .when('/cart', {
        controller: 'Cart',
        templateUrl: '/partials/cart/cart.template.html'
      })
      .when('/product/:id', {
        controller: 'SingleProduct',
        templateUrl: '/partials/singleproduct/singleproduct.template.html'
      })
    $locationProvider.html5Mode(true);

  });
