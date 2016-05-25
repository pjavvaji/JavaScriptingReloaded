define(['app', 'apps/pagination/list/view'], function (ContactManager, View) {
  ContactManager.module('PaginationApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
      showPageLinks: function () {
        var MyModel = Backbone.Model.extend({});
        var PageCollection = Backbone.Collection.extend({
          model: MyModel
        });
        var pageCollection = new PageCollection();
        for (var i = 1; i < 6; i++) {
          var myModel = new MyModel({
            pageNum: i
          });
          pageCollection.add(myModel);
        }
        var paginationView = new View.PaginationView({
          collection: pageCollection
        });
        ContactManager.pageRegion.show(paginationView);
      }
    };
  });
  return ContactManager.PaginationApp.List.Controller;
});
