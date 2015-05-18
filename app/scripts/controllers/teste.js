'use strict';

/**
 * @ngdoc function
 * @name angular10App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular10App
 */

(function(angular) {
  'use strict';
var myApp = angular.module('angular10App');

myApp.controller('testeCtrl', ['$scope', function($scope) {
    $scope.username = "";
   

  $scope.sayHello = function() {
      $scope.greeting = 'Olá mundo ' + $scope.username + '!';
    };

}]);
})(window.angular);