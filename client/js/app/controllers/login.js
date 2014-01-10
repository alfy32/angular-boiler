angular.module('angular-boiler').controller('loginCtrl',
  function ($scope, user) {
    user.authenticate(function (authenticated) {
      if(authenticated) window.location.hash = '';
    });
    
    $scope.login = function () {
      $scope.nameError = $scope.name ? '' : "No Username Entered";
      $scope.passError = $scope.pass ? '' : "No Password Entered";

      if($scope.name && $scope.pass) {
        user.login($scope.name, $scope.pass, function (loggedIn) {
          if(loggedIn) {
            window.location.hash = '';
          }
          else {
            $scope.error = "Login failed. Username and password are not correct.";
          }
        });
      }
    };
  }
);