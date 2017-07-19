'use strict';

angular.module('cartApp.service',[]).factory('productsFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){

	var productsObj = {
		productGetFn : productGetFn,
		productGetArray : [],
		setProCatIdFn : setProCatIdFn,
		getProCatIdFn : getProCatIdFn,
		setProIdFn : setProIdFn,
		getProIdFn : getProIdFn,
		setCartObjFn : setCartObjFn,
		getCartObjFn : getCartObjFn,
		selectedProAry : [],
		setWishlistFn : setWishlistFn,
		getWishlistFn : getWishlistFn,
		wishlistAry : [],
		wishCount : 0,
		wishVar : false,
		removeCartItemFn : removeCartItemFn,
		setCarSearchFn : setCarSearchFn,
		getCarSearchFn : getCarSearchFn,
		setCartToWishFn : setCartToWishFn,
		setMoveWishToCartFn : setMoveWishToCartFn,
		removeWishItemFn : removeWishItemFn
	};

	function productGetFn(){

		var defer = $q.defer();

		$http({
			url : 'data/cart.json',
			method : 'GET',
		}).success(function(data){
			productsObj.productGetArray = data;
			defer.resolve(data)
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
	}

	/* to get same category products*/

	function setProCatIdFn(CatId){
		productsObj.singleCatIdValue = CatId;
	}
	function getProCatIdFn(){
		return productsObj.singleCatIdValue;
	}


	/*to get single product detail*/

	function setProIdFn(proId){
		productsObj.singleProId = proId;
	}
	function getProIdFn(){
		return productsObj.singleProId;
	}

	/*to get add to cart ammount*/

	function setCartObjFn(cartObj){
		productsObj.cartObj = cartObj;
		productsObj.selectedProAry.push(productsObj.cartObj);

		var count=0;
		for(var i=0; i<productsObj.selectedProAry.length; i++){
			if(productsObj.selectedProAry[i].p_id == productsObj.cartObj.p_id){
				count++;
			}
			if(count>1){
				alert('Product already added to cart');
				productsObj.selectedProAry.pop();
			}
		}				
		$rootScope.cartCount = productsObj.selectedProAry.length;
		console.log('selectedProAry: '+ JSON.stringify(productsObj.selectedProAry.length));

	}


	function getCartObjFn(){
		return productsObj.selectedProAry;
	}
	function removeCartItemFn(){
		$rootScope.cartCount = productsObj.selectedProAry.length;		
	}

	/*wish list value*/
 	$rootScope.wishcount = 0;
	function setWishlistFn(wishObj){
		productsObj.wishlistObj = wishObj
		productsObj.wishlistAry.push(productsObj.wishlistObj);
		var count = 0;
		var indexVal;
		for(var i = 0; i<productsObj.wishlistAry.length; i++){
			if(productsObj.wishlistAry[i].p_id == productsObj.wishlistObj.p_id){
				count++;
			}
			if(count > 1){
				var values = productsObj.wishlistAry.map(function(o) { 
					 indexVal = o.p_name; 
					 return indexVal;
				});
				var index = values.indexOf(indexVal);
				console.log('wish array propety value: '+ JSON.stringify(indexVal));
				console.log('wish array index: '+ index);
				productsObj.wishlistAry.splice(index,1);
				productsObj.wishlistAry.pop();
			}
		}
		$rootScope.wishcount = productsObj.wishlistAry.length;
		productsObj.wishVar = ($rootScope.wishcount > 0) ? true : false;
		console.log('header controller wish count: '+ $rootScope.wishcount);
		console.log('wish show hide: '+productsObj.wishVar);
	}

	function getWishlistFn(){		
		/*console.log('wish array: '+ JSON.stringify(productsObj.wishlistAry));*/
		return productsObj.wishlistAry;
	}


	function removeWishItemFn(){
		$rootScope.wishcount = productsObj.wishlistAry.length;
		productsObj.wishVar = ($rootScope.wishcount > 0) ? true : false;	
	}



	/*Cart to wish list item transfer*/

 	function setCartToWishFn(cartToWishObj){
 		var allProLength = productsObj.productGetArray.productsInCart;
 		for(var i=0; i<allProLength.length; i++){
 			if(allProLength[i].p_id==cartToWishObj){
 				console.log('cartToWishObj: '+ JSON.stringify(allProLength[i]));
 				productsObj.wishlistAry.push(allProLength[i]);

 				var count = 0;
				var indexVal;
				for(var j = 0; j<productsObj.wishlistAry.length; j++){
					if(productsObj.wishlistAry[j].p_id == allProLength[i].p_id){
						count++;
						console.log('wish count setCartToWishFn: '+count);
					}
					if(count > 1){
						var values = productsObj.wishlistAry.map(function(o) { 
							 indexVal = o.p_name; 
							 return indexVal;
						});
						/*var index = values.indexOf(indexVal);
						productsObj.wishlistAry.splice(index,1);*/
						alert('Product already in wishlist');
						productsObj.wishlistAry.pop();
					}
				}
				$rootScope.wishcount = productsObj.wishlistAry.length;
				productsObj.wishVar = ($rootScope.wishcount > 0) ? true : false;
 			}
 		}
 		console.log('setCartToWishFn '+JSON.stringify(productsObj.wishlistAry));
		$rootScope.cartCount = productsObj.selectedProAry.length;	
		console.log('$rootScope.cartCount setWishlistFn: '+ $rootScope.cartCount);
 	}

 	/*move item wishlist to cart*/

	function setMoveWishToCartFn(itemMovedToCart){
		//productsObj.wishToCartItem = itemMovedToCart;

		productsObj.selectedProAry.push(itemMovedToCart);

		var count=0;
		for(var i=0; i<productsObj.selectedProAry.length; i++){
			if(productsObj.selectedProAry[i].p_id == itemMovedToCart.p_id){
				count++;
			}
			if(count>1){
				alert('Product already added to cart');
				productsObj.selectedProAry.pop();
			}
		}				
		$rootScope.cartCount = productsObj.selectedProAry.length;
		$rootScope.wishcount = productsObj.wishlistAry.length;
		productsObj.wishVar = ($rootScope.wishcount > 0) ? true : false;
		console.log('selectedProAry: '+ JSON.stringify(productsObj.selectedProAry.length));
	}

/*Global search*/

	function setCarSearchFn(searchElem){
		productsObj.searchResult = [];		
		var allProducts = productsObj.productGetArray.productsInCart;
		for(var i=0; i<allProducts.length; i++){
			var count = 0;
			if(allProducts[i].p_name.toLowerCase().indexOf(searchElem) > -1){
				productsObj.searchResult.push(allProducts[i]);
			}
		}
	}
	function getCarSearchFn(){
		return productsObj.searchResult;
	}

	return productsObj;


}]);




