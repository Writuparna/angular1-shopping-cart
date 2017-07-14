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
	'cartApp.cart',
	'cartApp.wishlist',
	'cartApp.userlist',
	'ui.bootstrap',
	'cartApp.slider',
	'cartApp.login',
]);




angular.module('cartApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',function ($urlRouterProvider, $stateProvider, $locationProvider){

	$stateProvider.state('home',{
		url : '/home',
		templateUrl : 'modules/home/view/home.html',
		controller : 'HomeController'
	}).state('header',{
		template : '<main-header></main-header>',
		controller : 'HeaderController'
	}).state('slider',{
		template : '<home-slider></home-slider>',
		controller : 'SliderController'
	}).state('signup',{
		url : '/signup',
		templateUrl : 'modules/signup/view/signup.html',
		controller : 'SignupController'
	}).state('login',{
		url : '/login',
		templateUrl : 'modules/login/view/login.html',
		controller : 'LoginController'
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
		templateUrl : 'modules/cart/view/cart.html',
		controller : 'CartController'
	}).state('wishlist',{
		url : '/wishlist',
		templateUrl : 'modules/wishlist/view/wishlist.html',
		controller : 'WishlistController'
	}).state('userlist',{
		url : '/userlist',
		templateUrl : 'modules/userlist/view/userlist.html',
		controller : 'UserlistController'
	});
	$urlRouterProvider.otherwise('home');/**/

}]);
