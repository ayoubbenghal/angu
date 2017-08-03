angular.module('myApp.magasin', [])


    .controller('MagasinCtrl', ['$scope', 'MagasinService', '$q', '$timeout', '$location', '$rootScope', function ($scope, MagasinService, $q, $timeout, $location, $rootScope) {

        $scope.albumsTableau = [];

        $scope.albums = {};
        $scope.qte = 1;
        $scope.res = false;


        $scope.quantite = 0;





        console.log($location.path());
        console.log($location.search());

        $scope.checkAll = function(checkAll){

            if (checkAll) {
                angular.forEach($scope.albumsTableau, function (value, key) {
                   $scope.albumsTableau[key].check=true;
                });
            }else{
                 angular.forEach($scope.albumsTableau, function (value, key) {
                   $scope.albumsTableau[key].check=false;
                });
            }


        }

        $scope.ajouter = function () {

            $scope.albumsTableau.push({
                qte: $scope.qte,
                name: $scope.selectedAlbum


            });
            console.log($scope.albumsTableau);
            $scope.qte = 1;
            $scope.selectedAlbum = "";


        };
        $scope.supprimer = function (pos) {
            $scope.albumsTableau.splice(pos, 1);
        }
        $scope.acheter = function () {
            angular.forEach($scope.albumsTableau, function (value, key) {
                $scope.quantite += $scope.albumsTableau[key].qte;
            });

            $rootScope.achats = $rootScope.achats.concat($scope.albumsTableau);


            /* angular.forEach($scope.albumsTableau, function (value, key) {
                 $rootScope.achats.push($scope.albumsTableau[key]);
                 console.log($rootScope.achats[key].name.title);
             });*/



            $scope.qte = 1;
            $scope.selectedAlbum = "";
            $scope.albumsTableau = [];
            $scope.res = true;

            $rootScope.qteCommande += $scope.quantite;
            console.log($scope.qteCommande);


            $timeout(function () {
                $scope.res = false;
                $scope.quantite = 0;
            }, 3000);


        }




        // var promise = MagasinService.getPosts();
        /*promise.then(function (response) {
            console.log(response);
            $scope.datas2 = response.data;
            return 'promesse resolved'
        }, function () {
            console.log('error');
        }

        ).then(function (p) {
            console.log(p);
        });*/
        $scope.albums = MagasinService.getPostsViaRessource();
        console.log($scope.albums);
        var defer = $q.defer();
        defer.promise.then(function (val) {
            console.log(val);
        }, function (error) {
            console.log(error);
        }

        );






        $scope.$watch('person', function () {

            //  $scope.result = MagasinService.compute($scope.person);

        }, true);

    }]);