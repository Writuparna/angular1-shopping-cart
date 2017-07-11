'use strict';

angular.module('cartApp.wishlist.controller', []).controller('WishlistController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.wishArray = productsFactory.getWishlistFn();
	console.log($scope.wishArray)
			

}]);