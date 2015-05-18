'use strict';

/**
 * @ngdoc function
 * @name angular10App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular10App
 */
angular.module('angular10App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
