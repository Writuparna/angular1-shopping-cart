'use strict';

angular.module('cartApp.login.controller', []).controller('LoginController', ['$scope','loginFactory','$rootScope',function($scope,loginFactory,$rootScope){



	$scope.loginForm = function(useremail,userpass){		

		loginFactory.setLoginFormFn(useremail,userpass);

		$rootScope.loginShow = false;
		$rootScope.logoutShow = true;	
		//$scope.useremail = "";
		//$scope.userpass = "";
	}

}]);