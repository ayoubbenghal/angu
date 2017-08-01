'use strict';

angular.module('myApp.demo')
    .filter('yearToMonth',function(){
        return function(value){
            return value*12;
        }

    });

