'use strict';

var cartApp = angular.module('cartApp',[
    'ui',
	'ui.router',
	'cartApp.home',
	'cartApp.header',
	'cartApp.signup',
	'cartApp.service',
	'cartApp.productlist'
]);




angular.module('cartApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',function ($urlRouterProvider, $stateProvider, $locationProvider){

	$stateProvider.state('home',{
		url : '/home',
		templateUrl : 'modules/home/view/home.html',
		controller : 'HomeController'
	}).state('signup',{
		url : '/signup',
		templateUrl : 'modules/signup/view/signup.html',
		controller : 'SignupController'
	});
	/*$urlRouterProvider.otherwise('home');*/

}]);
