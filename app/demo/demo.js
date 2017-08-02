angular.module('myApp.demo', [])


    .controller('DemoCtrl', ['$scope', 'DemoService', '$q', '$timeout','$location', function ($scope, DemoService, $q, $timeout,$location) {

        $scope.person = {};
        $scope.datas = {};


        $scope.books = [{ 'id': '1', 'author': 'Jack', 'title': 'Moi' },
        { 'id': '2', 'author': 'John', 'title': 'Mon ami' },
        { 'id': '3', 'author': 'Max', 'title': 'L\'autre' }]

        $scope.books.forEach(function (b) {
            b.text = b.id + ' ' + b.author + ' ' + b.title;
        });


        console.log($location.path());
        console.log($location.search());
        
        $scope.redirect=function(){
            $location.path('/view1');

        }
        $scope.title=$location.search().title;
        $scope.author=$location.search().author;
        
        DemoService.logConfig();
        var promise = DemoService.getPosts();
        promise.then(function (response) {
            console.log(response);
            $scope.datas2 = response.data;
            return 'promesse resolved'
        }, function () {
            console.log('error');
        }

        ).then(function (p) {
            console.log(p);
        });
        $scope.datas = DemoService.getPostsViaRessource();
        console.log($scope.datas);
        var defer = $q.defer();
        defer.promise.then(function (val) {
            console.log(val);
        }, function (error) {
            console.log(error);
        }

        );

        $timeout(function () {
            defer.reject('error');

        }, 4000)





        $scope.$watch('person', function () {

            $scope.result = DemoService.compute($scope.person);
        }, true);

    }]);