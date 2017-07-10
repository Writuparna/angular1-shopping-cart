'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','productsFactory',function($scope,productsFactory){


	//$scope.wishcount = productsFactory.getWishlistFn();
	$scope.wishcount = productsFactory.getWishlistFn();

	console.log('header controller wish count: '+$scope.wishcount);

}]);