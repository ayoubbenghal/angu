angular.module('myApp.magasin')
    .service().factory('MagasinService', ['config', '$filter', '$http','$resource', function (config, $filter, $http,$resource) {
        return {

           /* compute: function (person) {

                return 'je m appelle ' +
                    person.prenom + ' , ' +
                    person.nom + ' et j ai ' + $filter('yearToMonth')(person.age) + ' ans ce qui fait ' +
                    person.age * 12 + ' mois et donc je suis ' +
                    (person.age > 10 ? 'Grand' : 'pppetit');


            },*/
            logConfig: function () {
                console.log(config.apiUrl);
            },
            getPosts: function () {
               var promise= $http.get(config.apiUrl);
               console.log(promise);
              return promise;
            },
            getPostsViaRessource :function(){
                return $resource(config.apiUrl).query();
            } 

        }
    }]);