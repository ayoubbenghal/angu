'use strict';

angular.module('myApp.view1', ['ngRoute'])


    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
        $scope.mavar = 'ok';
        $scope.$watch('mavar', function () {
            $scope.mavarUpperCase = $scope.mavar.toUpperCase();
        });
        $http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
            $scope.users = response.data;
        });

    }]);