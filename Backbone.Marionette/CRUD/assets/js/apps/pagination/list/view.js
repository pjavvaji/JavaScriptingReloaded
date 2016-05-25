define(['app',
        'tpl!apps/pagination/list/templates/page.tpl',
        'tpl!apps/pagination/list/templates/pagination.tpl'
       ], function (ContactManager, PageTpl, PaginationTpl) {
  ContactManager.module('PaginationApp.List.View', function (View, ContactManager, Backbone, Marionette, $, _) {
    View.Page = Marionette.ItemView.extend({
      template: PageTpl,
      tagName: 'li'
    });

    View.PaginationView = Marionette.CompositeView.extend({
      template: PaginationTpl,
      childView: View.Page,
      childViewContainer: '.pagination',
      initialize: function() {
        this.collection.on('change', this.render, this);
      }
    });
  });
  return ContactManager.PaginationApp.List.View;
});
