'use strict';

/* Directives */


angular.module('cartApp.header.directives', []).
  directive('mainHeader', ['productsFactory',function(productsFactory){
    return {
    	restrict : 'AEC',
    	replace : true,
    	templateUrl : 'modules/header/view/header.html',
    	link: function(scope, element, attrs){
    		scope.wishCount = productsFactory.getWishlistFn();
    	}
    };
  }]);
