'use strict';

angular.module('cartApp.service',[]).factory('productsFactory',['$q','$http',function($q,$http){

	var productsObj = {
		productGetFn : productGetFn,
		productGetArray : [],
		getProCatIdFn : getProCatIdFn
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

	function getProCatIdFn(CatId){
		console.log('product category is from service: '+CatId);
	}


	return productsObj;


}]);
