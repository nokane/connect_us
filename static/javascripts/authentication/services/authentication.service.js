(function () {
  'use strict';

  Authentication.$inject = ['$cookies', '$http'];

  function Authentication($cookies, $http) {
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);
    }

    function registerSuccessFn(data, status, headers, config) {
      console.log("I MADE IT IN HERE!!")
      console.log(data);
      Authentication.login(data.data.email, data.data.password);
    }

    function registerErrorFn(data, status, headers, config) {
      console.log(status);
      console.error('Epic failure!');
    }

    function login(email, password) {
      return $http.post('/api/v1/auth/login/', {
        email: email, password: password
      }).then(loginSuccessFn, loginErrorFn);
    }

    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }

      return JSON.parse($cookies.authenticatedAccount);
    }

    function isAuthenticated() {
      return !!$cookies.authenticatedAccount;
    }

    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

    function loginSuccessFn(data, status, headers, config) {
      Authentication.setAuthenticatedAccount(data.data);
      window.location = '/';
    }

    function loginErrorFn(data, status, headers, config) {
      console.error('Epic failure!');
    }

    var Authentication = {
      register: register,
      login: login,
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      setAuthenticatedAccount: setAuthenticatedAccount
    };

    return Authentication;
  }
  
  angular
    .module('connectus.authentication.services', ['ngCookies'])
    .factory('Authentication', Authentication);


})();