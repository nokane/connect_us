(function () {
  'use strict';

  function Profile($http) {


    function destroy(profile) {
      return $http.delete('/api/v1/accounts/' + profile.id + '/');
    }

    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/');
    }

    function update(profile) {
      return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
    }
    
    var Profile = {
      destroy: destroy,
      get: get,
      update: update
    };

    return Profile;

  }
  Profile.$inject = ['$http'];
  angular
    .module('connectus.profiles.services', [])
    .factory('Profile', Profile);

})();