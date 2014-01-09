angular.module('angular-boiler', []);

angular.module('angular-boiler').config(
  function ($routeProvider) {

    for (var i = 0; i < nav.length; ++i) {
      $routeProvider.when(nav[i].url, {
        controller: nav[i].ctrl,
        templateUrl: nav[i].tmpl
      });
    }
  }
);
