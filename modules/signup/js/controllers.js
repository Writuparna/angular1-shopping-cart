'use strict';

angular.module('cartApp.signup.controller', []).controller('SignupController', ['$scope','signupFactory',function($scope,signupFactory){

	


	$scope.signupForm = function(username,userphno,useremail,userpass,userconfirmpass){		

		signupFactory.setSignupFormFn(username,userphno,useremail,userpass,userconfirmpass);

		$scope.username = ""
		$scope.userphno = ""
		$scope.useremail = ""
		$scope.userpass = ""
		$scope.userconfirmpass = ""
		//console.log(JSON.stringify($scope.signupAry));
	}

}]);