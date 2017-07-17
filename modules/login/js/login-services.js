'use strict';

/* Filters */
angular.module('cartApp.login.services', []).factory('loginFactory',['$http','$q','$state','signupFactory',function($http,$q,$state,signupFactory){


	var loginObj = {
		setLoginFormFn : setLoginFormFn,
		fetchSingleDatatoServerFn : fetchSingleDatatoServerFn
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
					localStorage.setItem('user id', data.data.id)
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
				'id' : localStorage.getItem('user id'),
			}
		}).success(function(data){
			loginObj.fetchSingleFormData = data.data;
			defer.resolve(data);
		}).error(function(){
			defer.reject('data can\'t be retained');
		});

		return defer.promise;
	}



	return loginObj;


}])