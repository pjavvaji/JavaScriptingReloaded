define(['app',
        'tpl!apps/headers/list/templates/header.tpl',
        'tpl!apps/headers/list/templates/headers_list.tpl'
       ], function (ContactManager, HeaderTpl, HeadersTpl) {
  ContactManager.module('HeadersApp.List.View', function (View, ContactManager, Backbone, Marionette, $, _) {
    View.HeaderView = Marionette.ItemView.extend({
      template: HeaderTpl,
      tagName: 'li'
    });

    View.HeadersView = Marionette.CompositeView.extend({
      template: HeadersTpl,
      childView: View.HeaderView,
      childViewContainer: '#headerContainer'
    });
  });
  return ContactManager.HeadersApp.List.View;
});
