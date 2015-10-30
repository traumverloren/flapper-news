angular.module('flapperNews')
.controller('NavCtrl', [
  '$scope',
  'Auth',
  function($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;
    // try setting $scope.user when controller loads
    Auth.currentUser().then(function (user) {
      $scope.user = user;
    });

    // Add Event listeners to handle when the user authenticates and logs out.
    $scope.$on('devise:new-registration', function (event, user) {
      $scope.user = user;
    });

    $scope.$on('devise:login', function (event, user) {
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (event, user) {
      $scope.user = {};
    });
  }]);
