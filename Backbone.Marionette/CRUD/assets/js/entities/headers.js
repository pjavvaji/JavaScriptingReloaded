define(["app"], function (ContactManager) {
  ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.Header = Backbone.Model.extend({
      defaults: {
        'header': '',
        'route': ''
      }
    });

    Entities.Headers = Backbone.Collection.extend({
      model: Entities.Header
    })
    var API = {
      getHeaders: function () {
        var headers = [{
          header: 'Contacts',
          route: 'contacts'
          }, {
          header: 'Photos',
          route: 'photos'
          }, {
          header: 'Videos',
          route: 'videos'
          }, {
          header: 'About Me',
          route: 'aboutMe'
          }];
        var headersCollection = new Entities.Headers(headers);
        return headersCollection;
      }
    };

    ContactManager.reqres.setHandler("headers:entities", function () {
      return API.getHeaders();
    });

  });
  return;
});
