'use strict';

/* Filters */
angular.module('cartApp.signup.services', []).factory('signupFactory',['$http','$q',function($http,$q){

		var signupObj = {
			setSignupFormFn : setSignupFormFn,
			getSignupFormFn : getSignupFormFn,
			signupArray : [],
			fetchDatatoServerFn : fetchDatatoServerFn,
			loginAddressFn : loginAddressFn,
			updateUserFn : updateUserFn
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
			console.log('All fetched data from signup: '+data)
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
	}

	
	function loginAddressFn(country,city,state,pincode,address,useremail){
		var defer = $q.defer();
		$http({
			url : 'data/updateform.php',
			method : 'PUT',
			data :{
				'useremail' : useremail,
				'country' : country,
				'city' : city,
				'state' : state,
				'pincode' : pincode,
				'address' : address
			}
		}).success(function(data){
			defer.resolve(data);
			console.log('data: '+data);
		}).error(function(){
			defer.reject('data can\'t be retrieved');
		});
		return defer.promise;
	}

 	function updateUserFn(userarray,useremail){
 		
 		var defer = $q.defer();
 		$http({
 			url : 'data/userprofileupdate.php',
 			method : 'PUT',
 			data : {
				'useremail' : useremail,
				'username' : userarray.name,
				'userphno' : userarray.phone,
				'country' : userarray.country,
				'city' : userarray.city,
				'state' : userarray.state,
				'pincode' : userarray.pincode,
				'address' : userarray.fulladdress 				
 			}
 		}).success(function(data){
 			defer.resolve(data);
 			console.log('update profile data: '+ data)
 		}).error(function(){
 			defer.reject('data can\'t be retrieved');
 		});
 		return defer.promise;
 	}


	return signupObj;

}])