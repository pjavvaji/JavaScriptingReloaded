define(['marionette'], function (Marionette) {
  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    headerRegion: '#header-region',
    pageRegion: '#page-region',
    mainRegion: '#main-region',
    dialogRegion: '#dialog-region'
  });

  // initialize the app router
  ContactManager.addInitializer(function (options) {
    // initialize the router
    requirejs(['apps/contacts/contacts_app',
               'apps/headers/headers_app',
               'apps/pagination/pagination_app',
               'apps/router/router',
               'apps/router/controller'],
      function (ContactsApp, HeadersApp, PaginationApp, AppRouter, AppController) {
        
        HeadersApp.trigger('headers:list');
        ContactsApp.trigger('contacts:list');
      });
  });

  /*ContactManager.on("initialize:after", function () {
    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
  });*/

  return ContactManager;
});
