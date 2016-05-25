define(['app', 'apps/pagination/list/controller'], function (ContactManager, Controller) {
  ContactManager.module('PaginationApp', function (PaginationApp, ContactManager, Backbone, Marionette, $, _) {
    var API = {
      showPageLinks: function () {
        Controller.showPageLinks();
      }
    };

    PaginationApp.on('pagination:list', function () {
      API.showPageLinks();
    })
  })
  return ContactManager.PaginationApp;
});
