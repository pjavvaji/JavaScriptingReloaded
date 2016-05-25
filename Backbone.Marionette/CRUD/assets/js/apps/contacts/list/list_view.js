define(['app',
        'tpl!apps/contacts/list/templates/contact.tpl',
        'tpl!apps/contacts/list/templates/contacts_list.tpl'
       ], function (ContactManager, ContactTpl, ContactsTpl) {
  ContactManager.module('ContactsApp.List.View', function (View, ContactManager, Backbone, Marionette, $, _) {
    View.ContactView = Marionette.ItemView.extend({
      template: ContactTpl,
      tagName: 'tr',
      triggers: {
        'click #edit': 'edit:contact',
        'click #delete': 'delete:contact'
      }
    });

    View.ContactsView = Marionette.CompositeView.extend({
      template: ContactsTpl,
      childView: View.ContactView,
      childViewContainer: 'tbody',
      initialize: function() {
        this.collection.on('change', this.render, this);
      },
      triggers: {
        'click #createContact': 'create:contact'
      }
    });
  });
  return ContactManager.ContactsApp.List.View;
});
