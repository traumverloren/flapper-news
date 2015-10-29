angular.module('flapperNews', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello world!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 24},
      {title: 'post 4', upvotes: 3},
      {title: 'post 5', upvotes: 6},
    ]
  }]);
