'use strict';

angular.module('cartApp.service',[]).factory('productsFactory',['$q','$http',function($q,$http){

	var productsObj = {
		productGetFn : productGetFn,
		productGetArray : [],
		setProCatIdFn : setProCatIdFn,
		getProCatIdFn : getProCatIdFn,
		setProIdFn : setProIdFn,
		getProIdFn : getProIdFn
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
		console.log('sigle product detail: '+ productsObj.singleProId);
		return productsObj.singleProId;
	}




	return productsObj;


}]);
