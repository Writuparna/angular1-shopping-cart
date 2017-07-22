'use strict';

angular.module('cartApp.productlist.controller', []).controller('ProductlistController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){
	//console.log('$state.params', $state.params);
	//$scope.productCatgId = productsFactory.getProCatIdFn();
	//console.log('product list page: '+ $scope.productCatgId);
	$scope.sameProAry = [];

	$scope.cartItemListpage = {};

	//$scope.proCatgId = $scope.sameCatgAry[$index].p_catg_id;
	//console.log('category list:'+ $scope.proCatgId);
	$scope.productCatgId = $state.params.id;
	$scope.activeMenu = $state.params.id;
		

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
		for(var i=0; i<allProList.length; i++){
			if($scope.productCatgId==allProList[i].p_catg_id){
				$scope.sameProAry.push(allProList[i]);
			}
		}
	}
	$scope.proIdFn = function($index){
		$scope.proId = $scope.sameProAry[$index].p_id;
		productsFactory.setProIdFn($scope.proId);
		//$state.go('productdetail');
	}


	$scope.wishList = function($index){		
		$scope.wishlistObj = ($scope.sameProAry[$index]);
		productsFactory.setWishlistFn($scope.wishlistObj);
		console.log('index: '+ $index);
		$scope.selected = $index; 
		console.log('wishlistObj: '+JSON.stringify($scope.wishlistObj.p_id));
		$scope.clickedProId = $scope.wishlistObj.p_id;
		//$state.go($state.current, null, {reload:true});
	}
	$scope.sameProwishId = function(pid){
		//console.log('ng-class: '+clickedProId);
		//var clickedProId = clickedProId;
		//productsFactory.ngcalssClickId(clickedProId);
		//console.log(productsFactory.ngcalssClickId(clickedProId));
		if(productsFactory.ngcalssClickId(pid)==true){
			console.log('true')
			return true;
		}else{
			console.log('false')
			return false;
		}
	}



	//$scope.wishActive = productsFactory.productInWishlistFn();

	$scope.addToCart = function($index){
		 var addToCartObj = ($scope.sameProAry[$index]);

		var proPrice = addToCartObj.p_originalprice;
		var qty = 1;
		var img = addToCartObj.p_image;
		var proname = addToCartObj.p_name;
		var proId = addToCartObj.p_id;
		var cartItemListpage = {};
		if(qty > 0 && qty!=""){
			cartItemListpage.p_id = proId;
			cartItemListpage.p_image = img;
			cartItemListpage.p_name = proname;
			cartItemListpage.p_originalprice = proPrice;
			cartItemListpage.proQty = qty;
			cartItemListpage.totalPrice = qty*proPrice;
			cartItemListpage.grandTotal = 0;
			/*console.log('new object: '+ JSON.stringify(cartItemListpage));
			console.log('list page cart: '+JSON.stringify(productsFactory.selectedProAry));*/
			productsFactory.setCartObjFn(cartItemListpage);

		}else{
			alert('please enter quantity');
		}

	}

}]);



