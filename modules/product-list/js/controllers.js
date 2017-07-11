'use strict';

angular.module('cartApp.productlist.controller', []).controller('ProductlistController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){

	$scope.productCatgId = productsFactory.getProCatIdFn();
	console.log('product list page: '+ $scope.productCatgId);
	$scope.sameProAry = [];

	$scope.sameCatgProductFn = function(){

		productsFactory.productGetFn()
			.then(function(allproducts){
				$scope.allproductslistScope = allproducts.productsInCart;
				$scope.sortSameProducts = sortSameProducts($scope.allproductslistScope);
			},function(){
				console.log('data cannot retrieved');
			});
	}
	$scope.sameCatgProductFn();
	 function sortSameProducts(allProList){
		//console.log(JSON.stringify(allProList));
		for(var i=0; i<allProList.length; i++){
			if($scope.productCatgId==allProList[i].p_catg_id){
				$scope.sameProAry.push(allProList[i]);
			}
		}
		//console.log(JSON.stringify($scope.sameProAry));
	}
	$scope.proIdFn = function($index){
		$scope.proId = $scope.sameProAry[$index].p_id;
		console.log('product id: '+ $scope.proId);
		productsFactory.setProIdFn($scope.proId);
		$state.go('productdetail');
	}


	$scope.wishList = function($index){
		
		$scope.wishlistObj = ($scope.sameProAry[$index]);
		console.log('wish list obj: '+ JSON.stringify($scope.wishlistObj));

		productsFactory.setWishlistFn($scope.wishlistObj);

		//$scope.wishArray = productsFactory.getWishlistFn();
	}


}]);