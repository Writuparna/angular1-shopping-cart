'use strict';

angular.module('cartApp.productdetail.controller', []).controller('ProductdetailController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.singleProId = productsFactory.getProIdFn();
	console.log('singleProId: '+ $scope.singleProId);
	//$scope.singleProDetail = [];

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
			console.log('single Pro Detail: '+ JSON.stringify($scope.singleProDetail));
	}

}]);