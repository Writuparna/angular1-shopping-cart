'use strict';

/* Directives */


angular.module('cartApp.header.directives', []).
  directive('mainHeader', [function(){
    return {
    	restrict : 'AEC',
    	replace : true,
    	templateUrl : 'modules/header/view/header.html'
    };
  }]);
