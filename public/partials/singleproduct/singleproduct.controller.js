angular.module('MyApp')

  .controller('SingleProduct', function ($scope, $location, $http, $routeParams, shopifyService, quotesService) {
    $scope.view = {}
    $scope.view.cart = {}
    $scope.view.quotes = quotesService.pickRandomQuote()
    $scope.view.isSelected = {}
    $scope.view.productImages = []
    $scope.view.currentImage
    $scope.view.showGallery
    $scope.view.itemsInCart
    shopifyService.getCart()
      .then((remoteCart) => {
        $scope.view.cart = remoteCart
        $scope.view.itemsInCart = remoteCart.lineItemCount
        $scope.$apply()
        shopifyService.updateCart(remoteCart)
      })
    // $scope.$watch('shopifyService.data.cart', function () {
    //   $scope.view.cart = shopifyService.data.cart
    // })
    $scope.view.id = $routeParams.id


    shopifyService.getSingleProduct($scope.view.id)
      .then((data) => {
        $scope.view.product = data
        $scope.$apply()
        $scope.view.variant = $scope.view.product["attrs"]["variants"][0]
        $scope.view.description = $scope.view.product.description

        for (var i = 0; i < $scope.view.product.images.length; i++) {
          $scope.view.productImages.push($scope.view.product.images[i])

        }
        $scope.view.setPhotoCount()
        $scope.view.currentImage = $scope.view.productImages[0].src
        console.log($scope.view.productImages)
        console.log($scope.view.showGallery)
        $scope.$apply()
      })
      .catch(err => console.error(err))
    $scope.view.quantity = 1;
    $scope.view.addToCart = (quantity) => {
      shopifyService.requestAddToCart($scope.view.variant, quantity, $scope.view.photoArray)
      $location.path('/cart')
    }
      // $scope.view.toggleClass()

    $scope.view.toggle = ""
    $scope.view.toggleClass = () => {
      if ($scope.view.toggle === "") {
        return $scope.view.toggle="show-nav"
      } else {
      return  $scope.view.toggle=""
      }
    }

    $scope.view.togglePhotoLeft = () => {
      $scope.view.currentImage = $scope.view.productImages[0].src
      $scope.view.isSelected.first = "current-selection"
      $scope.view.isSelected.second = ""

    }

    $scope.view.togglePhotoRight = () => {
      $scope.view.currentImage = $scope.view.productImages[1].src
      $scope.view.isSelected.second = "current-selection"
      $scope.view.isSelected.first = ""

    }

    $scope.view.setPhotoCount = () => {
      if ($scope.view.productImages.length > 1) {
        $scope.view.showGallery = true;
      } else {
        $scope.view.showGallery = false;
      }
    }

    $scope.view.showDetails = false
    $scope.view.buttonText = "Show Details"
    $scope.view.showProductDetails = () => {
      $scope.view.showDetails = !$scope.view.showDetails
      if ($scope.view.showDetails === true ) {
        $scope.view.buttonText = "Hide Details"
      } else {
        $scope.view.buttonText = "Show Details"
      }

    }

    $scope.view.isSelected.first = "current-selection"
    $scope.view.isSelected.second = ""


  })
