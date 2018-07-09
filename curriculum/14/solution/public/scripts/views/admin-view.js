'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = () => {
    app.showOnly('.admin-view');

    $('#admin-form').on('submit', (event) => {
      event.preventDefault();
      let token = event.target.passphrase.value;

      $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/admin`, {token})
        .then(res => {
          console.log(res);
          if ( !! res ) {
            localStorage.token = true;
            page('/');
          } else {
            console.error('Invalid Login.');
          }
        })
        .catch(() => page('/'));
    });
  };

  adminView.verify = (ctx, next) => {
    if(!localStorage.token) $('.admin').addClass('admin-only');
    else $('.admin').show();
    next();
  }

  module.adminView = adminView;
})(app)
