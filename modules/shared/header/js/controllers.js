'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','$rootScope','productsFactory','$state',function($scope,$rootScope,productsFactory,$state){

$scope.$state = $state;
	//$scope.wishcount = productsFactory.getWishlistFn();
	/*$rootScope.wishcount = productsFactory.getWishlistFn();*/

	/*$scope.wishVar = ($rootScope.wishcount > 0) ? $rootScope.wishcount : 0;

	console.log('header controller wish count: '+ $rootScope.wishcount);
	console.log('wish show hide: '+$scope.wishVar);*/

}]);