'use strict';

var cartApp = angular.module('cartApp',[
	'ui.router',
	'cartApp.home'
]);




angular.module('cartApp').config(['$UrlRouterProvider', '$stateProvider', '$locationProvider',function ($UrlRouterProvider, $stateProvider, $locationProvider){

	$stateProvider.state('home',{
		url : '/home',
		templateUrl : 'modules/home/home.html',
		controller : 'HomeController'
	});
	$UrlRouterProvider.otherwise('home');

}]);
