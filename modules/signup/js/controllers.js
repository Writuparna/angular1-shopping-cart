'use strict';

angular.module('cartApp.signup.controller', []).controller('SignupController', ['$scope','signupFactory',function($scope,signupFactory){


	$scope.signupForm = function(username,userphno,useremail,userpass,userconfirmpass){		
		/*$scope.username = username;
		$scope.userphno = userphno;
		$scope.useremail = useremail;
		$scope.userpass = userpass;
		$scope.userconfirmpass = userconfirmpass;*/

		signupFactory.setSignupFormFn(username,userphno,useremail,userpass,userconfirmpass);

		console.log(JSON.stringify($scope.signupAry));
	}

}]);