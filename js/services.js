'use strict';

angular.module('cartApp.service',[]).factory('productsFactory',['$q','$http',function($q,$http){

	var productsObj = {
		productGetFn : productGetFn,
		productGetArray : [],
		setProCatIdFn : setProCatIdFn,
		getProCatIdFn : getProCatIdFn,
		setProIdFn : setProIdFn,
		getProIdFn : getProIdFn,
		/*setCartArryFn : setCartArryFn,
		getCartArryFn : getCartArryFn*/
		setCartObjFn : setCartObjFn,
		getCartObjFn : getCartObjFn,
		selectedProAry : []
	};

	function productGetFn(){

		var defer = $q.defer();

		$http.get('data/cart.json')
			.success(function(data){
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
		console.log('product category is from service: '+productsObj.singleCatIdValue);
	}
	function getProCatIdFn(){
		return productsObj.singleCatIdValue;
	}


	/*to get single product detail*/

	function setProIdFn(proId){
		productsObj.singleProId = proId;
		//console.log('sigle product detail: '+ productsObj.singleProId);
	}
	function getProIdFn(){
		//console.log('sigle product detail: '+ productsObj.singleProId);
		return productsObj.singleProId;
	}

	/*to get add to cart ammount*/

	function setCartObjFn(cartObj){
		productsObj.cartObj = cartObj;
		console.log('cart Object: '+ JSON.stringify(productsObj.cartObj));

		/*push object to an array*/
		productsObj.selectedProAry.push(productsObj.cartObj);
				var count=0;
			for(var i=0; i<productsObj.selectedProAry.length; i++){
				console.log('count: '+ count);
				console.log('selectedProAry: '+ JSON.stringify(productsObj.cartObj.proId));
				/*var newQty = productsObj.cartObj.proQty;
				console.log('newQty: '+ newQty);*/
				if(productsObj.selectedProAry[i].proId == productsObj.cartObj.proId){
					count++;
					console.log('count if id equal: '+ count);
				}
				if(count>1){
					alert('Product already added to cart');
					productsObj.selectedProAry.pop();
					console.log('pop last');
				}
			}
			
			console.log('single Pro Detail: '+ JSON.stringify(productsObj.selectedProAry));

	}
	function getCartObjFn(){
		return productsObj.selectedProAry;
	}



	return productsObj;


}]);
