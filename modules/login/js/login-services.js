'use strict';

/* Filters */
angular.module('cartApp.login.services', []).factory('loginFactory',['$http','$q',function($http,$q){


	var loginObj = {
		setLoginFormFn : setLoginFormFn
	};

		function setLoginFormFn(useremail,userpass){

			var def = $q.defer;

			$http({
				method : 'POST',
				url : 'data/loginform.php',
				data : {
					'useremail' : useremail,
					'userpass' : userpass
				}
			}).success(function(){
				alert(useremail)

			}).error(function(){
				alert('no insert')
			});

		}

	return loginObj;


}])