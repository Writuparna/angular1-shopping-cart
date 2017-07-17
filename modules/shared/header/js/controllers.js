'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','$rootScope','productsFactory','$state','loginFactory','$window',function($scope,$rootScope,productsFactory,$state,loginFactory,$window){

	$scope.activeMenu = "abc";

	$scope.cartAry = [];
	$scope.sameCatgAry = [];

	$scope.cartAryFn = function(){

		productsFactory.productGetFn()
			.then(function(allproducts){
				$scope.allproductsScope = allproducts;
				$scope.sortedProduct = sortCategory($scope.allproductsScope);
				},function(){
				console.log('data cannot retrieved');
			});
	}
	$scope.cartAryFn();
	function sortCategory(cartAry){		
		$scope.cartAryScope = cartAry.productsInCart;
		for(var i=0; i<$scope.cartAryScope.length; i++){
			$scope.sameCatgAry.push($scope.cartAryScope[i]);
			var count = 0;
			for(var j=0; j<$scope.sameCatgAry.length; j++){
				if($scope.cartAryScope[i].p_catg_id==$scope.sameCatgAry[j].p_catg_id){
					count++;
				}
			}
			if(count>1){
				$scope.sameCatgAry.pop();
			}
		}
		//console.log(JSON.stringify($scope.sameCatgAry));	
	}
	$scope.catgoryList = function($index, catgname){
		console.log('header category: '+$index)
		$scope.proCatgId = $scope.sameCatgAry[$index].p_catg_id;
		console.log('category list:'+ $scope.proCatgId);
		productsFactory.setProCatIdFn($scope.proCatgId);
		$scope.activeMenu = catgname;
		$state.go('productlist', null,{reload: true});
	}
	$scope.logout =function(){
		$window.localStorage.clear();
		$state.go('home');
	}





}]);