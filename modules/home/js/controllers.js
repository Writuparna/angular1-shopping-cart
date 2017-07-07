'use strict';

angular.module('cartApp.home.controller', []).controller('HomeController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.cartAry = [];

	$scope.cartAryFn = function(){

		productsFactory.productGetFn()
			.then(function(productGetArray){
				$scope.cartAry = productGetArray;
				$scope.cartAryPro = productGetArray.productsInCart;
			},function(){
				console.log('data cannot retrieved');
			});
	}
	$scope.cartAryFn();

}]);