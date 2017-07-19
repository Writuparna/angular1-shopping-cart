'use strict';

angular.module('cartApp.wishlist.controller', []).controller('WishlistController', ['$scope','productsFactory','$state',function($scope,productsFactory,$state){

	$scope.wishArray = productsFactory.getWishlistFn();
	var wishToCartItem = [];
	console.log('wish array: '+ JSON.stringify($scope.wishArray));
	
	$scope.removeFromWishList = function($index){
		$scope.wishArray.splice($index,1);
		console.log('wishArray: '+JSON.stringify($scope.wishArray));
		productsFactory.removeWishItemFn();
	}
	$scope.moveWishToCart = function($index){
		var itemMovedToCart = $scope.wishArray[$index];
		console.log('wishArray: '+itemMovedToCart);

		$scope.wishArray.splice($index,1);



		var proPrice = itemMovedToCart.p_originalprice;
		var qty = 1;
		var img = itemMovedToCart.p_image;
		var proname = itemMovedToCart.p_name;
		var proId = itemMovedToCart.p_id;

		wishToCartItem.p_id = proId;
		wishToCartItem.p_image = img;
		wishToCartItem.p_name = proname;
		wishToCartItem.p_originalprice = proPrice;
		wishToCartItem.proQty = qty;
		wishToCartItem.totalPrice = qty*proPrice;
		wishToCartItem.grandTotal = 0;
		console.log('new object: '+ JSON.stringify(wishToCartItem));

		//productsFactory.setCartObjFn($scope.cartItem);
		$state.go('cart');

		productsFactory.setMoveWishToCartFn(wishToCartItem);

	}

}]);