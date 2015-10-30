angular.module('flapperNews')
.controller('AuthCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth){

    // These functions will return promises,
    // which we can use to redirect the user to the 'home' state if authentication or registration is successful.
    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $state.go('home');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function() {
        $state.go('home');
      });
    };

  }]);
