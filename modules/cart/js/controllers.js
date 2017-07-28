'use strict';

angular.module('cartApp.cart.controller', []).controller('CartController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){

	$scope.cartAry = productsFactory.getCartObjFn();
	console.log('cartAry: '+JSON.stringify($scope.cartAry));

	$scope.grandTotal = 0;
	for (var i = 0; i < $scope.cartAry.length; i++) {
		$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
	}

	$scope.changeQtyFn = function(newQtyParam,$index){
		$scope.newQtyScope = newQtyParam;
		if($scope.newQtyScope > 0 && $scope.newQtyScope!="" ){
			$scope.cartAry[$index].totalPrice = $scope.newQtyScope * ($scope.cartAry[$index].p_originalprice);
			$scope.grandTotal=0;
			for (var i = 0; i < $scope.cartAry.length; i++) {
				$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
			}
		}
	}

	$scope.removeItem = function($index){
		$scope.cartAry.splice($index,1);
		$scope.grandTotal=0;

		for (var i = 0; i < $scope.cartAry.length; i++) {
			$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
		}
		productsFactory.removeCartItemFn();
		console.log('selectedProAry: '+ JSON.stringify(productsFactory.selectedProAry));

	}
	 $scope.cartToWishList = function($index){
		var itemMovedToWishlist = productsFactory.selectedProAry[$index].p_id;

		$scope.cartAry.splice($index,1);
		$scope.grandTotal=0;
		for (var i = 0; i < $scope.cartAry.length; i++) {
			$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
		}
		console.log(itemMovedToWishlist);
		productsFactory.setCartToWishFn(itemMovedToWishlist);
	}

	$scope.checkOut =function(grandTotal){
		$state.go('login');
		var cartAry =$scope.cartAry;
		console.log('grand total: '+ grandTotal);
		productsFactory.setGrandTotal(grandTotal,cartAry);
	}
			

}]);