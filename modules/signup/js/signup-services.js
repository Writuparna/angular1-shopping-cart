'use strict';

/* Filters */
angular.module('cartApp.signup.services', []).factory('signupFactory',['$http','$q',function($http,$q){

		var signupObj = {
			setSignupFormFn : setSignupFormFn,
			getSignupFormFn : getSignupFormFn,
			signupArray : [],
			fetchDatatoServerFn : fetchDatatoServerFn,
		};

		function setSignupFormFn(username,userphno,useremail,userpass,userconfirmpass){
			var signupValueObj = {};

			signupValueObj.username = username;
			signupValueObj.userphno = userphno;
			signupValueObj.useremail = useremail;
			signupValueObj.userpass = userpass;
			signupValueObj.userconfirmpass = userconfirmpass;

			signupObj.signupArray.push(signupValueObj);

			$http({
				url : 'data/form.php',
				method : 'POST',
				data: {
					'username': username,
					'userphno': userphno,
					'useremail': useremail,
					'userpass': userpass,
					'userconfirmpass': userconfirmpass,
				},
			}).success(function(data, status, headers, config){
				alert(username);
				signupObj.fetchDatatoServerFn();
			}).error(function(){
				alert('no insert')
			});

		}

		function getSignupFormFn(){
			return signupObj.signupArray;
		}


	function fetchDatatoServerFn(){

		var defer = $q.defer();

		$http({
			url : 'data/fetchformdata.php',
			method : 'GET',
		}).success(function(data){
			signupObj.fetchFormData = data;
			defer.resolve(data);
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
	}

	return signupObj;

}])