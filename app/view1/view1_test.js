'use strict';

describe('myApp.view1 module', function () {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function () {

    it('should ....', inject(function ($controller, $rootScope, $httpBackend) {
      //spec body
      var $scope = $rootScope.$new();
      var view1Ctrl = $controller('View1Ctrl', { $scope: $scope });
      expect(view1Ctrl).toBeDefined();
      $httpBackend.expectGET('https://jsonplaceholder.typicode.com/users').respond([{ id: '1', name: 'name' }]);
      $httpBackend.flush();
      $scope.$apply();

      expect($scope.mavar).toEqual('ok');
      expect($scope.mavarUpperCase).toEqual('OK');
      expect($scope.users[0].id).toEqual('1');
      expect($scope.users[0].name).toEqual('name');

   


    }));

  });
});