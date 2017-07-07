'use strict';

var cartApp = angular.module('cartApp',[
    'ui',
	'ui.router',
	'cartApp.home',
	'cartApp.header',
	'cartApp.signup',
	'cartApp.service',
	'cartApp.productlist',
	'cartApp.productdetail'
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
	}).state('productlist',{
		url: '/productlist',
		templateUrl: 'modules/product-list/view/productlist.html',
		controller: 'ProductlistController'
	}).state('productdetail',{
		url : '/productdetail',
		templateUrl : 'modules/product-detail/view/productdetail.html',
		controller : 'ProductdetailController'
	});
	/*$urlRouterProvider.otherwise('home');*/

}]);
