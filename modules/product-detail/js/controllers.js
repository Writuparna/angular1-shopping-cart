'use strict';

angular.module('cartApp.productdetail.controller', []).controller('ProductdetailController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.singleProId = productsFactory.getProIdFn();
	console.log('singleProId: '+ $scope.singleProId);
	$scope.selectedProAry = [];

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
		$scope.cartItem = {
			proId : $scope.proId,
			proImg : $scope.img,
			proName : $scope.proname,
			proPrice : $scope.proPrice,
			proQty : $scope.qty,
		}
		console.log('selectedProAry.length: '+ $scope.selectedProAry.length);
		$scope.selectedProAry.push($scope.cartItem);
		for(var i=0; i<$scope.selectedProAry.length; i++){
			//$scope.selectedProAry.push($scope.cartItem);
			var count=0;
			console.log('selectedProAry: '+ JSON.stringify($scope.selectedProAry[i]));
			if($scope.selectedProAry[i].proId == $scope.cartItem.proId){
				count++;
				console.log('count: '+ count);
			}else{
				count=0;
			}
			if(count>1){
				$scope.selectedProAry.pop();
			}/**//**/
		}
		console.log('single Pro Detail: '+ JSON.stringify($scope.selectedProAry));
	}


}]);