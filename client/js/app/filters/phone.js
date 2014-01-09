angular.module('angular-boiler').filter('phone',
  function () {

    return function (str) {
      return '(' + str.substr(0, 3) + ') ' + str.substr(3, 3) + ' - ' + str.substr(6, 4);
    };

  }
);
