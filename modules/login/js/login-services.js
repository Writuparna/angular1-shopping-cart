'use strict';

/* Filters */
angular.module('cartApp.login.services', []).factory('loginFactory',['$http','$q',function($http,$q){


	var loginObj = {
		setLoginFormFn : setLoginFormFn
	};

		function setLoginFormFn(useremail,userpass){

			//var def = $q.defer;
			console.log(useremail +' , '+ userpass)
			$http({
				url : 'data/loginform.php',
				method : 'POST',
				data : {
					'useremail' : useremail,
					'userpass' : userpass
				}
			}).success(function(data, status, headers, config){
				console.log(data);
				if ( data.trim() === 'correct') {
					window.location.href = 'http://localhost/cart/project/shopping-cart/';
				} else {
					//$scope.errorMsg = "Invalid Email and Password";
				}

			}).error(function(){
				alert('no insert')
			});

		}

	return loginObj;


}])