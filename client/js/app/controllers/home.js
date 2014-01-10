angular.module('angular-boiler').controller('homeCtrl',
  function ($scope, user) {
    user.authenticate(function (authenticated) {
      if(!authenticated)
        window.location = '#/login';
    });

    $scope.header = "This is home";

    $scope.logout = user.logout;
  }
);