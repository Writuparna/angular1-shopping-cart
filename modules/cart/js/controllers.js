'use strict';

angular.module('cartApp.cart.controller', []).controller('CartController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.cartAry = productsFactory.getCartObjFn();
	console.log('cart page: '+ JSON.stringify($scope.cartAry));
	console.log('new Qty: '+ $scope.newQty);

	$scope.changeQtyFn = function(newQtyParam,$index){
		$scope.newQtyScope = newQtyParam;
		console.log('new qty: '+ $scope.newQtyScope + ' index price ' + JSON.stringify($scope.cartAry[$index].proPrice));
		$scope.totalPrice = $scope.newQtyScope * ($scope.cartAry[$index].proPrice);
	}

	for (var i = 0; i < $scope.cartAry.length; i++) {
		$scope.newQtyScope = $scope.cartAry[i].proQty;
	}
	/**/
	/*$scope.$watch('cartAry',function(newValue,oldValue){
		for (var i = 0; i < $scope.cartAry.length; i++) {
			if(newValue[i].proPrice!=oldValue[i].proPrice){
				console.log('new value: '+ JSON.stringify(newValue));
			}
		}
	});*/



			

}]);