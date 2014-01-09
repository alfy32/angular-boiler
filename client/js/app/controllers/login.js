angular.module('angular-boiler').controller('loginCtrl',
  function ($scope, user) {
    
    $scope.login = function () {
      $scope.nameError = $scope.name ? '' : "No Username Entered";
      $scope.passError = $scope.pass ? '' : "No Password Entered";

      if($scope.name && $scope.pass) {
        users.login($scope.name, $scope.pass, function (loggedIn) {
          if(loggedIn) {
            window.location = '#/schedule';
          }
          else {
            $scope.error = "Login failed. Username and password are not correct.";
          }
        });
      }
    };
  }
);