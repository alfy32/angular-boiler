var nav = [
  {
    name: 'Login',
    url: '/',
    ctrl: 'loginCtrl',
    tmpl: 'views/login.html'
  },
  {
    name: 'Home',
    url: '/home',
    ctrl: 'homeCtrl',
    tmpl: 'views/home.html'
  }
];

angular.module('angular-boiler').factory('nav',
  function () {
    return nav;
  }
);
