define(['app', 'apps/contacts/list/list_controller'], function (ContactManager, Controller) {
  ContactManager.module('ContactsApp', function (ContactsApp, ContactManager, Backbone, Marionette, $, _) {
    var API = {
      showContactsList: function () {
        Controller.showContactsList();
      }
    };

    ContactsApp.on('contacts:list', function () {
      API.showContactsList();
    })
  })
  return ContactManager.ContactsApp;
});
