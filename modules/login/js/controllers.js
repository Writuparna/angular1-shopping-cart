'use strict';

angular.module('cartApp.login.controller', []).controller('LoginController', ['$scope','loginFactory',function($scope,loginFactory){

	


	$scope.loginForm = function(useremail,userpass){		

		loginFactory.setLoginFormFn(useremail,userpass);

		$scope.useremail = "";
		$scope.userpass = "";
	}

}]);