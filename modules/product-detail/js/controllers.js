'use strict';

angular.module('cartApp.productdetail.controller', []).controller('ProductdetailController', ['$scope','$rootScope','productsFactory','$state',function($scope,$rootScope,productsFactory,$state){

	$scope.singleProId = productsFactory.getProIdFn();
	console.log('singleProId: '+ $scope.singleProId);
	$scope.selectedProAry = [];
	$scope.cartItem = {};



	$scope.productDetailFn = function(){

		productsFactory.productGetFn()
			.then(function(data){
				$scope.allProDetailScope = data.productsInCart;
				$scope.proDetail = $scope.proDetailFn($scope.allProDetailScope);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	$scope.productDetailFn();
	$scope.proDetailFn = function(allProData){
		//console.log('allProData: '+ allProData);
		for(var i=0; i<allProData.length; i++){
			if($scope.singleProId==allProData[i].p_id){
				//$scope.singleProDetail.push(allProData[i]);
				$scope.singleProDetail = allProData[i];
			}
		}
			
	}

	$scope.addtoCartFn = function(qtyparam){	
		$scope.proPrice = $scope.singleProDetail.p_originalprice;
		$scope.qty = qtyparam;
		$scope.img = $scope.singleProDetail.p_image;
		$scope.proname = $scope.singleProDetail.p_name;
		$scope.proId = $scope.singleProDetail.p_id;
		if($scope.qty > 0 && $scope.qty!=""){
			$scope.cartItem.proId = $scope.proId;
			$scope.cartItem.proImg = $scope.img;
			$scope.cartItem.proName = $scope.proname;
			$scope.cartItem.proPrice = $scope.proPrice;
			$scope.cartItem.proQty = $scope.qty;
			$scope.cartItem.totalPrice = $scope.qty*$scope.proPrice;
			$scope.cartItem.grandTotal = 0;
			console.log('new object: '+ JSON.stringify($scope.cartItem));

			productsFactory.setCartObjFn($scope.cartItem);
			$state.go('cart');
		}else{
			alert('please enter quantity');
		}

	}
	console.log('selectedPro Obj: '+JSON.stringify($scope.cartItem));


}]);