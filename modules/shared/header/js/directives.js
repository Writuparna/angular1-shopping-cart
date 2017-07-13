'use strict';

/* Directives */


angular.module('cartApp.header.directives', []).
  directive('mainHeader', ['productsFactory',function(productsFactory){
    return {
    	restrict : 'AEC',
        /*scope : {
            wishcount :'='
        },*/
    	replace : true,
    	templateUrl : 'modules/shared/header/view/header.html',
    	/*link: function(scope, elem, attrs){
            scope.$watch('wishcount',function(newValue, oldValue){
                console.log('message change '+ newValue);
            })
        }*/
    };
  }]);
