var nav = [
  {
    name: 'Login',
    url: '/login',
    ctrl: 'loginCtrl',
    tmpl: 'views/login.html'
  },
  {
    name: 'Home',
    url: '/',
    ctrl: 'homeCtrl',
    tmpl: 'views/home.html'
  }
];

angular.module('angular-boiler').factory('nav',
  function () {
    return nav;
  }
);
