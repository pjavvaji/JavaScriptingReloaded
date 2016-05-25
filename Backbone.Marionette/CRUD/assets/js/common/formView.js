define(['app',
        'tpl!common/templates/form.tpl'
       ], function (ContactManager, FormTpl) {
  ContactManager.module('Form.View', function (View, ContactManager, Backbone, Marionette, $, _) {
    View.FormView = Marionette.ItemView.extend({
      template: FormTpl,
      container: '#dialog-region',
      events: {
        'click #btnSave': 'save',
        'click #btnCancel': 'cancel'
      },
      save: function () {
        var _this = this,
          fname = $('#fname').val();
        var lname = $('#lname').val();
        var contact = ContactManager.request("contact:entities");
        contact.set({
          fname: fname,
          lname: lname,
          id: this.model.get('id')
        });
        if (this.model.get('title') === 'Create New Contact') {
          ContactManager.execute('addContact', contact);
        } else {
          ContactManager.execute('updateContact', contact, function (result) {
            if(result) {
              _this.model.set({
                fname: fname,
                lname: lname
              });
            }
          });
        }
      }
    });

  });
  return ContactManager.Form.View;
});
