'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.demo',
  'myApp.magasin',
  'myApp.achats',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  }).when('/demo',{
  templateUrl:'demo/demo.html',
  controller:'DemoCtrl'
 

  }).when('/magasin',{
    templateUrl:'magasin/magasin.html',
    controller:'MagasinCtrl'

  }).when('/achat',{
     templateUrl:'achats/achat.html',
    controller:'AchatCtrl'
  }


  ).otherwise({redirectTo: '/view1'});
}]).run(['$rootScope',function($rootScope) {
    $rootScope.qteCommande = 0;
    $rootScope.achats = [];
}]);;
