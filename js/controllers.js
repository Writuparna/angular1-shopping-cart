'use strict';

/* Controllers */

/*angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);*/
/*angular.module('myApp.controllers', []).controller('FinanceController', function($scope){
	$scope.salary = 0;
	$scope.percentage = 0;
	$scope.result = function(){
		return $scope.salary * $scope.percentage * 0.01;
	};
});*/
/*angular.module('myApp.controllers',[]).controller('GreetingController', function($scope){
	$scope.now = new Date();
	$scope.greeting = 'hello';
});*/
/*angular.module('myApp', []).controller('GreetingController', function($scope){
	$scope.now = new Date();
	$scope.helloMessage = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
	$scope.greeting = $scope.helloMessage[0];
	$scope.greetingTest = $scope.helloMessage.length;
	$scope.getRandomHelloMessage = function(){
		$scope.greeting = $scope.helloMessage[parseInt((Math.random() * $scope.helloMessage.length))];
	}
});*/
angular.module('myApp', []).controller('GreetingController', function($scope){
	this.now = new Date();
	this.helloMessage = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
	this.greeting = this.helloMessage[0];
	this.getRandomHelloMessage = function(){
		this.greeting = this.helloMessage[parseInt((Math.random() * this.helloMessage.length))];
	}
});