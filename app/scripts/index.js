
'use strict';


angular.module('scopeExample', ['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'])
  .controller('testeCtrl', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
