'use strict';

/* Directives */


angular.module('cartApp.slider.directives', []).
  directive('homeSlider', [function(){
    return {
    	restrict : 'AEC',
      scope : {},
    	replace : true,
    	templateUrl : 'modules/shared/slider/view/slider.html',
    	link: function(scope, elem, attrs){
            scope.myInterval = 5000;
              var slides = scope.slides = [];
              scope.addSlide = function() {
                var newWidth = 'banner' + slides.length;
                slides.push({
                  image: 'http://localhost/cart/project/shopping-cart/img/banner/' + newWidth + '.jpg',
                  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
                });                
                //console.log(slides.length);
              };
              for (var i=0; i<3; i++) {
                scope.addSlide();
              }
        }
    };
  }]);
