'use strict';

angular.module('cartApp.slider.controller', []).controller('SliderController', ['$scope','$rootScope','productsFactory','$state',function($scope,$rootScope,productsFactory,$state){

//$scope.$state = $state;
	//$scope.wishcount = productsFactory.getWishlistFn();
	/*$rootScope.wishcount = productsFactory.getWishlistFn();*/

	/*$scope.wishVar = ($rootScope.wishcount > 0) ? $rootScope.wishcount : 0;

	console.log('header controller wish count: '+ $rootScope.wishcount);
	console.log('wish show hide: '+$scope.wishVar);*/

/*slider js*/

 /*$scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
*/


}]);