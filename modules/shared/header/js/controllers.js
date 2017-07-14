'use strict';

angular.module('cartApp.header.controller', []).controller('HeaderController', ['$scope','$rootScope','productsFactory','$state',function($scope,$rootScope,productsFactory,$state){

	$scope.abc = "abc";

	$scope.catFn = function(){

		console.log($scope.abc);

	}


}]);