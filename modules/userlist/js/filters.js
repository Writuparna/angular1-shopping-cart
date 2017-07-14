'use strict';

/* Filters */

angular.module('cartApp.userlist.filters', []).filter('searchUser', [function(){
    return function(arr, searchString) {

    	var result = [];
    	console.log(arr);
    	searchString = searchString.toLowerCase();
    	angular.forEach(arr, function(item){
    		 if(item.name.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

    	})

    }

    return result;

  }]);
