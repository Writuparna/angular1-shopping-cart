'use strict';

angular.module('cartApp.userlist.controller', []).controller('UserlistController', ['$scope','signupFactory',function($scope,signupFactory){

	/*$scope.signupAry = signupFactory.getSignupFormFn();
	console.log(JSON.stringify($scope.signupAry));*/
	$scope.userListAry = [];

	$scope.userListFn = function(){
		signupFactory.fetchDatatoServerFn()
			.then(function(allUser){
				$scope.userListAry = allUser;
				console.log('signup controller data: '+JSON.stringify($scope.userListAry));
			},function(){
				console.log('data cannot retrieved');
			})
	}
	$scope.userListFn();

}]);