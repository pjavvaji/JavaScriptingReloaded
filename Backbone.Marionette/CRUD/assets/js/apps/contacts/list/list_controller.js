define(['app', 'apps/contacts/list/list_view', 'common/formView', 'entities/contacts'], function (ContactManager, View, FormView) {
  ContactManager.module('ContactsApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
      showContactsList: function () {
        ContactManager.request('contacts:entities', function (contactsModel) {
          var contactsView = new View.ContactsView({
            collection: contactsModel
          });
          ContactManager.mainRegion.show(contactsView);
          if (contactsModel.length === 0) {
            $('#contactsTable').hide();
            $('#noData').show();
          }
          contactsView.on('childview:edit:contact', function (childView) {
            childView.model.set('title', 'Edit Contact');
            var formView = new FormView.FormView({
              model: childView.model
            });
            ContactManager.dialogRegion.show(formView);
            $('#dialog-region').modal()
          });
          contactsView.on('childview:delete:contact', function (childView) {
            ContactManager.execute('deleteContact', childView.model, function(numberOfRecords) {
              if (numberOfRecords === 0) {
                $('#contactsTable').hide();
                $('#noData').show();
              }
            });
          });
          contactsView.on('create:contact', function (childView) {
            var contactModel = ContactManager.request('contact:entities');
            contactModel.set('title', 'Create New Contact');
            var formView = new FormView.FormView({
              model: contactModel
            });
            ContactManager.dialogRegion.show(formView);
            $('#dialog-region').modal()
          })
        });
      }
    };
  });
  return ContactManager.ContactsApp.List.Controller;
});
