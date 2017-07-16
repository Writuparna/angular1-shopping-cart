'use strict';

angular.module('cartApp.userprofile.controller', []).controller('UserprofileController', ['$scope','signupFactory',function($scope,signupFactory){

	
	$scope.userListAry = [];

	$scope.userListFn = function(){
		signupFactory.fetchDatatoServerFn()
			.then(function(allUser){
				$scope.userListAry = allUser;
				//console.log('signup controller data: '+JSON.stringify($scope.userListAry));
			},function(){
				console.log('data cannot retrieved');
			})
	}
	$scope.userListFn();

}]);