'use strict';

/* Directives */


angular.module('cartApp.productlist.directive', []).directive('toggleClass', [function(){

	return{
		restrict : 'AEC',
		link : function($scope,element,attrs){
			element.bind('click', function(){
				element.toggleClass("toggleBtn");
			})
		}
	}
  
}]);
