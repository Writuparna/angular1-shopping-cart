'use strict';

angular.module('cartApp.cart.controller', []).controller('CartController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.cartAry = productsFactory.getCartObjFn();
	console.log('cart page: '+ JSON.stringify($scope.cartAry));


}]);