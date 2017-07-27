'use strict';

angular.module('cartApp.signup.controller', []).controller('SignupController', ['$scope','signupFactory',function($scope,signupFactory){

	


	$scope.signupForm = function(username,userphno,useremail,userpass,userconfirmpass){		

		signupFactory.setSignupFormFn(username,userphno,useremail,userpass,userconfirmpass);

		$scope.username = "";
		$scope.userphno = "";
		$scope.useremail = "";
		$scope.userpass = "";
		$scope.userconfirmpass = "";
	}


	function loginAddressFn(country,city,state,pincode,address){

		var defer = $q.defer();

		$http({
			url : 'data/form.php',
			method : 'POST',
			data :{
				'country' : country,
				'city' : city,
				'state' : state,
				'pincode' : pincode,
				'address' : address
			}
		}).success(function(data){
			defer.resolve(data);
			console.log(data);
		}).error(function(){
			defer.reject('data can\'t be retrieved');
		});
		return defer.promise;
	}






}]);