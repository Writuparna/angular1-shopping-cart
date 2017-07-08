'use strict';

var cartApp = angular.module('cartApp',[
    'ui',
	'ui.router',
	'cartApp.home',
	'cartApp.header',
	'cartApp.signup',
	'cartApp.service',
	'cartApp.productlist',
	'cartApp.productdetail',
	'cartApp.cart'
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
	}).state('cart',{
		url : '/cart',
		templateUrl : 'modules/cart/views/cart.html',
		controller : 'CartController'
	});
	$urlRouterProvider.otherwise('home');/**/

}]);
