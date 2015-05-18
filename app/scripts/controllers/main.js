'use strict';

/**
 * @ngdoc function
 * @name angular10App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular10App
 */
angular.module('angular10App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
