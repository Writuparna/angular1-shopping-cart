'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','$rootScope','productsFactory','$state','loginFactory','$window',function($scope,$rootScope,productsFactory,$state,loginFactory,$window){

	$scope.activeMenu = "abc";

	$scope.cartAry = [];
	$scope.sameCatgAry = [];
	$scope.searchString = "";

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
	}
	$scope.catgoryList = function($index, catgname){
		console.log('header category: '+$index)
		$scope.proCatgId = $scope.sameCatgAry[$index].p_catg_id;
		console.log('category list:'+ $scope.proCatgId);
		productsFactory.setProCatIdFn($scope.proCatgId);
		$scope.activeMenu = catgname;
		$state.go('productlist', null,{reload: true});
	}
	$rootScope.loginShow = true;
	$rootScope.logoutShow = false;	

	

	$scope.login = function(){	
		loginFactory.fetchSingleDatatoServerFn()
			.then(function(loginData){
				console.log('loginData login page: '+ JSON.stringify(loginData));
				if(loginData.status == 'fail'){
					$state.go('login');
					console.log('hello1');
				}else if(loginData.status == 'success'){
					//$scope.logoutShow = true;	
					$rootScope.logoutShow = true;	
					console.log('hello2');
				}
			},function(){
				console.log('login data cant retrieved');
		})
	}
	$scope.logout =function(){
		$rootScope.loginShow = true;
		$rootScope.logoutShow = false;	
		loginFactory.fetchSingleDatatoServerFn()
			.then(function(loginData){
				if(loginData.status=='success'){
					localStorage.removeItem('userid');
					$rootScope.logoutShow = false;	
					$state.go('home');		
				}
			},function(){
				console.log('login data cant retrieved');
			});
	}


}]);