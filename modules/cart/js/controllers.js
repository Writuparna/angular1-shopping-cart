'use strict';

angular.module('cartApp.cart.controller', []).controller('CartController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.cartAry = productsFactory.getCartObjFn();
	//$scope.cartBtnAry = productsFactory.getAddtocartFn();
	console.log('cart page: '+ JSON.stringify($scope.cartAry));
	//console.log('cart button page: '+ JSON.stringify($scope.cartBtnAry));
		
	console.log('whole array: '+ JSON.stringify($scope.cartAry));
	$scope.grandTotal = 0;
	for (var i = 0; i < $scope.cartAry.length; i++) {
		console.log('selected array total price: '+ $scope.cartAry[i].totalPrice);
		$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
		console.log('old grand total: '+$scope.grandTotal);/**/
	}

	$scope.changeQtyFn = function(newQtyParam,$index){
		$scope.newQtyScope = newQtyParam;
		if($scope.newQtyScope > 0 && $scope.newQtyScope!="" ){
			console.log('new qty: '+ $scope.newQtyScope + ' index price ' + JSON.stringify($scope.cartAry[$index].proPrice));
			$scope.cartAry[$index].totalPrice = $scope.newQtyScope * ($scope.cartAry[$index].proPrice);
			$scope.grandTotal=0;
			for (var i = 0; i < $scope.cartAry.length; i++) {
				console.log('selected array total price: '+ $scope.cartAry[i].totalPrice);
				$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
				console.log('old grand total: '+$scope.grandTotal);
			}
			console.log('selected array: '+ JSON.stringify($scope.cartAry[$index]));

			console.log('new grand total: '+$scope.grandTotal);	
		}
	}

$scope.removeItem = function($index){
	$scope.cartAry.splice($index,1);
			$scope.grandTotal=0;

	for (var i = 0; i < $scope.cartAry.length; i++) {
		console.log('selected array total price: '+ $scope.cartAry[i].totalPrice);
		$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
		console.log('old grand total: '+$scope.grandTotal);
	}

	console.log('array after remove item: '+ JSON.stringify($scope.cartAry));

}
	



			

}]);