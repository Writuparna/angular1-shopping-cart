'use strict';

angular.module('cartApp.search.controller', []).controller('SearchController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){

	$scope.sameProAry = productsFactory.getCarSearchFn();
	/*console.log('product list page: '+ $scope.productCatgId);
	$scope.sameProAry = [];*/

	/*$scope.singleProId = productsFactory.getProIdFn();
	console.log('singleProId: '+ $scope.singleProId);
	$scope.selectedProAry = [];*/
	$scope.cartItemListpage = {};



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
	}


	$scope.addToCart = function($index){
		 var addToCartObj = ($scope.sameProAry[$index]);

		 var proPrice = addToCartObj.p_originalprice;
		var qty = 1;
		var img = addToCartObj.p_image;
		var proname = addToCartObj.p_name;
		var proId = addToCartObj.p_id;
		var cartItemListpage = {};
		if(qty > 0 && qty!=""){
			cartItemListpage.proId = proId;
			cartItemListpage.proImg = img;
			cartItemListpage.proName = proname;
			cartItemListpage.proPrice = proPrice;
			cartItemListpage.proQty = qty;
			cartItemListpage.totalPrice = qty*proPrice;
			cartItemListpage.grandTotal = 0;
			console.log('new object: '+ JSON.stringify(cartItemListpage));
			console.log('list page cart: '+JSON.stringify(productsFactory.selectedProAry));
			productsFactory.setCartObjFn(cartItemListpage);


		}else{
			alert('please enter quantity');
		}











	}

}]);