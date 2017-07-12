'use strict';

angular.module('cartApp.userlist.controller', []).controller('UserlistController', ['$scope','signupFactory',function($scope,signupFactory){

	$scope.signupAry = signupFactory.getSignupFormFn();
	console.log(JSON.stringify($scope.signupAry));


}]);