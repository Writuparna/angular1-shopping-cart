'use strict';

angular.module('cartApp.productdetail.controller', []).controller('ProductdetailController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){

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
		if($scope.qty > 0){
			$scope.cartItem = {
				proId : $scope.proId,
				proImg : $scope.img,
				proName : $scope.proname,
				proPrice : $scope.proPrice,
				proQty : $scope.qty,
			}
			console.log('selectedProAry.length: '+ $scope.selectedProAry.length);
			$scope.selectedProAry.push($scope.cartItem);
				var count=0;
			for(var i=0; i<$scope.selectedProAry.length; i++){
				console.log('count: '+ count);
				console.log('selectedProAry: '+ JSON.stringify($scope.cartItem.proId));
				var newQty = $scope.cartItem.proQty;
				console.log('newQty: '+ newQty);
				if($scope.selectedProAry[i].proId == $scope.cartItem.proId){
					count++;
					console.log('count if id equal: '+ count);
				}
				if(count>1){
					//$scope.selectedProAry[0].proQty = newQty;
					alert('Product already added to cart');
					$scope.selectedProAry.pop();
					console.log('pop last');
				}
			}
			
			console.log('single Pro Detail: '+ JSON.stringify($scope.selectedProAry));
			productsFactory.setCartArryFn($scope.selectedProAry);
			$state.go('cart');
		}else{
			alert('please enter quantity');
		}

	}


}]);