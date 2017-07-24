'use strict';

/* Filters */
angular.module('cartApp.login.services', []).factory('loginFactory',['$http','$q','$state','signupFactory',function($http,$q,$state,signupFactory){


	var loginObj = {
		setLoginFormFn : setLoginFormFn,
		fetchSingleDatatoServerFn : fetchSingleDatatoServerFn,
		loginAddressFn : loginAddressFn
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
				if ( data.status === 'success') {
					$state.go('userprofile');
					//var x = loginObj.fetchSingleDatatoServerFn(data.data);
					console.log('useremail: '+data.data.id);
					localStorage.setItem('userid', data.data.id)
				} else {
					console.log(data.msg);
				}

			}).error(function(){
				alert('no insert')
			});

		}


	function fetchSingleDatatoServerFn(userDetails){

		var defer = $q.defer();

		$http({
			url : 'data/fetchsingleformdata.php',
			method : 'POST',
			data : {
				'id' : localStorage.getItem('userid'),
			}
		}).success(function(data){
			loginObj.fetchSingleFormData = data.data;
			defer.resolve(data);
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
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


	return loginObj;


}])