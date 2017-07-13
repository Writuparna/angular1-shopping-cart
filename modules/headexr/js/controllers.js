'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','$rootScope','productsFactory',function($scope,$rootScope,productsFactory){


	//$scope.wishcount = productsFactory.getWishlistFn();
	$rootScope.wishcount = productsFactory.getWishlistFn();

	//console.log('header controller wish count: '+$scope.wishcount);

}]);