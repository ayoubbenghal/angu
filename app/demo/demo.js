angular.module('myApp.demo', [])


    .controller('DemoCtrl', ['$scope', 'DemoService', function ($scope, DemoService) {

        $scope.person = {};

        $scope.$watch('person', function () {

            $scope.result = DemoService.compute($scope.person);
        }, true);

    }]);