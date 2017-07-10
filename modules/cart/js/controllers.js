'use strict';

angular.module('cartApp.cart.controller', []).controller('CartController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.cartAry = productsFactory.getCartObjFn();
	console.log('cart page: '+ JSON.stringify($scope.cartAry));
		
	console.log('whole array: '+ JSON.stringify($scope.cartAry));
	$scope.grandTotal = 0;
	for (var i = 0; i < $scope.cartAry.length; i++) {
		console.log('selected array total price: '+ $scope.cartAry[i].totalPrice);
		$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
		console.log('old grand total: '+$scope.grandTotal);/**/
	}

	$scope.changeQtyFn = function(newQtyParam,$index){
		/*function isNumber(evt) {
		    evt = (evt) ? evt : window.event;
		    var charCode = (evt.which) ? evt.which : evt.keyCode;
		    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		        return false;
		    }
		    return true;
		}*/
		$scope.newQtyScope = newQtyParam;
		if($scope.newQtyScope > 0 && $scope.newQtyScope!="" ){
			console.log('new qty: '+ $scope.newQtyScope + ' index price ' + JSON.stringify($scope.cartAry[$index].proPrice));
			$scope.cartAry[$index].totalPrice = $scope.newQtyScope * ($scope.cartAry[$index].proPrice);
			//$scope.grandTotal = $scope.grandTotal + $scope.cartAry[$index].totalPrice;
			$scope.grandTotal=0;
			for (var i = 0; i < $scope.cartAry.length; i++) {
				console.log('selected array total price: '+ $scope.cartAry[i].totalPrice);
				$scope.grandTotal = $scope.grandTotal + $scope.cartAry[i].totalPrice;
				console.log('old grand total: '+$scope.grandTotal);
			}




			console.log('selected array: '+ JSON.stringify($scope.cartAry[$index]));

			console.log('new grand total: '+$scope.grandTotal);
			

		}
	}/**/
	



			

}]);