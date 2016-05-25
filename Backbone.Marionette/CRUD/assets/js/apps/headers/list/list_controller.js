define(['app', 'apps/headers/list/list_view', 'entities/headers'], function (ContactManager, View) {
  ContactManager.module('HeadersApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
      showHeaders: function () {
        var headersModel = ContactManager.request('headers:entities');
        var headersView = new View.HeadersView({
          collection: headersModel
        });
        ContactManager.headerRegion.show(headersView)
      }
    };
  });
  return ContactManager.HeadersApp.List.Controller;
});
