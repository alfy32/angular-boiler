angular.module('angular-boiler').factory('user',
  function ($http, nav) {
    var user = {};

    getUser();

    user.login = function (name, pass, cb) {
      $http.post('/login', {
        name: name,
        pass: pass
      }).then(function (resp) {
        if(resp.data.success) {
          user.user = resp.data.user;
        }
        else {
          user.user = {};
        }

        cb(resp.data.success);
      });
    };

    user.authenticate = function (cb) {
      if(user.user) return cb(true);
      else return cb(false);
    };

    user.logout = function () {
      $http.get('/logout').then(function (resp) {
        if(resp.data.success) {
          delete user.user;
          window.location.hash = 'login';
        } else {
          console.log('logout error');
        }
      });
    }

    function getUser() {
      $http.get('/user').then(function (resp) {
        if(resp.data.success) {
          user.user = resp.data.user;
        }
      });
    }

    return user;
  }
);