'use strict';

angular.module('cartApp.productlist.controller', []).controller('ProductlistController', ['$scope','productsFactory',function($scope,productsFactory){

	$scope.productCatgId = productsFactory.getProCatIdFn(CatId);
	console.log('product list page');

}]);