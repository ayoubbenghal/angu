angular.module('myApp.demo')
    .service().factory('DemoService',['$filter',function($filter){
        return {

         compute: function (person) {

           return 'je m appelle ' +
            person.prenom + ' , ' +
              person.nom + ' et j ai ' + $filter('yearToMonth')(person.age) + ' ans ce qui fait ' +
                person.age * 12 + ' mois et donc je suis ' +
                (person.age > 10 ? 'Grand' : 'pppetit');


        }

        }
    } ]) ;