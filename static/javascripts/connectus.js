(function () {
  'use strict';

  angular
    .module('connectus', [
      'connectus.routes',
      'connectus.authentication',
      'connectus.config',
      'connectus.layout'
    ])
    .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  };

})();
