'use strict';

/**
 * @ngdoc overview
 * @name angular10App
 * @description
 * # angular10App
 *
 * Main module of the application.
 */
angular
  .module('angular10App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/teste', {
        templateUrl: 'views/teste.html',
        controller: 'testeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });