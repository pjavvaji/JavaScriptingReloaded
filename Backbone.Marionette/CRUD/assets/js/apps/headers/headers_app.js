define(['app', 'apps/headers/list/list_controller'], function (ContactManager, Controller) {
  ContactManager.module('HeadersApp', function (HeadersApp, ContactManager, Backbone, Marionette, $, _) {
    var API = {
      showHeaders: function () {
        Controller.showHeaders();
      }
    };

    HeadersApp.on('headers:list', function () {
      API.showHeaders();
    })
  })
  return ContactManager.HeadersApp;
});
