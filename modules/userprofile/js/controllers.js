'use strict';

angular.module('cartApp.userprofile.controller', []).controller('UserprofileController', ['$scope','loginFactory','signupFactory','$rootScope',function($scope,loginFactory,signupFactory,$rootScope){

	
	$scope.userListAry = [];
	$scope.showHideForm = false;	
	$scope.hideUserDetail = true;

	$scope.userListFn = function(){
		loginFactory.fetchSingleDatatoServerFn()
			.then(function(singleUser){
				console.log('singleUser',singleUser)
				if(singleUser.status=="success"){					
					$rootScope.loginShow = false;
					$rootScope.logoutShow = true;	
				}
				$scope.userListAry = singleUser.data;
				console.log('user profile controller data: '+JSON.stringify($scope.userListAry));
				var showHideForm;
				if($scope.userListAry.country==""){
					$scope.showHideForm = true;
				}else if($scope.userListAry.country!=""){
					$scope.showHideForm = false;					
				}
			},function(){
				console.log('data cannot retrieved');
			})
	}
	$scope.userListFn();
	console.log('userListAry: '+$scope.userListAry);


	$scope.submitAddress = function(country,city,state,pincode,address){
		console.log('country: '+country+' city: '+city+' state: '+state+' pincode: '+pincode+' address: '+address)
		var useremail = $scope.userListAry.email;
		signupFactory.loginAddressFn(country,city,state,pincode,address,useremail);
	}
	
	$scope.showFullForm = function(){
		$scope.showUpdateForm = true;
		$scope.hideUserDetail = false;
		$scope.hideButton = true;
		$scope.showHideForm = false;
	}

	$scope.updateUser = function(userarray){
		var useremail = $scope.userListAry.email;
		signupFactory.updateUserFn(userarray,useremail);
		console.log('useremail: '+JSON.stringify(userarray));
		$scope.showUpdateForm = false;
		$scope.hideUserDetail = true;
		$scope.hideButton = false;
	}


}]);