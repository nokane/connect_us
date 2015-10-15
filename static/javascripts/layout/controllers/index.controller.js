(function () {
  'use strict';

  angular
    .module('connectus.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];

  function IndexController($scope, Authentication, Posts, Snackbar) {
    var vm = this;
    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.posts = [];

    activate();
    function activate() {
      Posts.all().then(postsSuccessFn, postsErrorFn);

      $scope.$on('post.created', function (event, post) {
        console.log("post created!!!!!")
        vm.posts.unshift(post);
      });

      $scope.$on('post.created.error', function () {
        vm.posts.shift();
      });
      function postsSuccessFn(data, status, headers, config) {
        console.log("POSTS success!!!")
        vm.posts = data.data;
        console.log(vm.posts)
        console.log("INDEX CONTROLLER", vm);
      }

      function postsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
