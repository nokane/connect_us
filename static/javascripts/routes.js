(function () {
  'use strict';

  angular
    .module('connectus.routes', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layouts/index.html'
    }).when('/+:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/profile.html'
}).otherwise('/');
  }
})();