'use strict';

angular.module('cartApp.userprofile.controller', []).controller('UserprofileController', ['$scope','loginFactory','signupFactory',function($scope,loginFactory,signupFactory){

	
	$scope.userListAry = [];

	$scope.userListFn = function(){
		loginFactory.fetchSingleDatatoServerFn()
			.then(function(singleUser){
				console.log('singleUser',singleUser)
				$scope.userListAry = singleUser.data;
				console.log('user profile controller data: '+JSON.stringify($scope.userListAry));
			},function(){
				console.log('data cannot retrieved');
			})
	}
	$scope.userListFn();


	$scope.submitAddress = function(country,city,state,pincode,address){
		console.log('country: '+country+' city: '+city+' state: '+state+' pincode: '+pincode+' address: '+address)
		var useremail = $scope.userListAry.email;
		signupFactory.loginAddressFn(country,city,state,pincode,address,useremail);
	}
	

}]);