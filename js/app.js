'use strict';

var cartApp = angular.module('cartApp',[
	'ui.router',
	'cartApp.home'
]);




cartApp.config(['$UrlRouterProvider', '$stateProvider', '$locationProvider'],function($UrlRouterProvider, $stateProvider, $locationProvider){

	$stateProvider.state('home',{
		url : '/home',
		templateUrl : 'modules/home/home.html',
		coltroller : 'HomeController'
	});
	$UrlRouterProvider.otherwise('home');

});
