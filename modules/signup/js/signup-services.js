'use strict';

/* Filters */
angular.module('cartApp.signup.services', []).factory('signupFactory',['$http','$q',function($http,$q){

		var signupObj = {
			setSignupFormFn : setSignupFormFn,
			getSignupFormFn : getSignupFormFn,
			signupArray : [],
			sendDatatoServerFn : sendDatatoServerFn
		};

		function setSignupFormFn(username,userphno,useremail,userpass,userconfirmpass){
			var signupValueObj = {};

			signupValueObj.username = username;
			signupValueObj.userphno = userphno;
			signupValueObj.useremail = useremail;
			signupValueObj.userpass = userpass;
			signupValueObj.userconfirmpass = userconfirmpass;

			signupObj.signupArray.push(signupValueObj);

			/*insert value to database*/

			//var defer = $q.defer();

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
			}).error(function(){
				alert('no insert')
			});

			//return defer.promise;





		}

		function getSignupFormFn(){
			return signupObj.signupArray;
		}


	function sendDatatoServerFn(){

		var defer = $q.defer();

		$http({
			url : 'data/cart.json',
			method : 'POST',
			data: {
				username: username,
				userphno: userphno,
				useremail: useremail,
				userpass: userpass,
				userconfirmpass: userconfirmpass,
			},
		}).success(function(data){
			productsObj.productGetArray = data;
			defer.resolve(data)
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
	}



		return signupObj;


}])