'use strict';

/* Filters */

angular.module('cartApp.wishlist.filter', []).filter('searchItem', [function(){
    return function(arr, searchString) {

    	var result = [];

        if(!searchString){
            return arr;
        }

    	searchString = searchString.toLowerCase();
    	angular.forEach(arr, function(item){
    		 if(item.p_name.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

    	})
    	console.log('filter arr: '+JSON.stringify(result));
    	return result;

    }

  }]);
