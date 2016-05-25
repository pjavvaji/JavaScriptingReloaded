define(['app'], function (ContactManager) {
  ContactManager.module('Entities', function (Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.Contact = Backbone.Model.extend({
      defaults: {
        'fname': '',
        'lname': '',
        'id': ''
      },
      initialize: function () {
        if (!this.get('id')) {
          this.set('id', new Date().getTime());
        }
      }
    });

    Entities.Contacts = Backbone.Collection.extend({
      model: Entities.Contact
    })

    var API = {
      getContacts: function (cb) {
        if (Entities.contacts === undefined) {
          Entities.contacts = new Entities.Contacts();
        }
        /*ContactUtils.findData({}, function (records) {
          _.each(records, function (record) {
            var contact = new Entities.Contact(record);
            Entities.contacts.add(contact);
          });
          cb(Entities.contacts)
        });*/
        for (var i=0; i<3; i++) {
          var contact = new Entities.Contact({
            'fname': 'ABC ' + i,
            'lname': 'DEF ' + i
          });
          Entities.contacts.add(contact);
        }
        cb(Entities.contacts);
      },
      newContact: function () {
        return new Entities.Contact();
      },
      addContact: function (contact) {
        /*ContactUtils.insertData(contact, function () {
          if (Entities.contacts.length === 0) {
            $('#contactsTable').show();
            $('#noData').hide();
          }*/
          Entities.contacts.add(contact);
//        });
      },
      deleteContact: function (contact, cb) {
        /*ContactUtils.removeData(contact, function (numRemoved) {
          if (numRemoved > 0) {
            Entities.contacts.remove(contact);
            cb(Entities.contacts.length);
          }
        });*/
        Entities.contacts.remove(contact);
        cb(Entities.contacts.length);
      },
      updateContact: function (contact, cb) {
        /*ContactUtils.updateData(contact, function (result) {
          cb(result);
        });*/
      }
    };

    ContactManager.reqres.setHandler('contacts:entities', function (cb) {
      API.getContacts(function (entities) {
        cb(entities);
      });
    });

    ContactManager.reqres.setHandler('contact:entities', function () {
      return API.newContact();
    });

    ContactManager.commands.setHandler('addContact', function (contact, cb) {
      API.addContact(contact);
    });

    ContactManager.commands.setHandler('deleteContact', function (contact, cb) {
      API.deleteContact(contact, cb);
    });

    ContactManager.commands.setHandler('updateContact', function (contact, cb) {
      API.updateContact(contact, cb);
    });

  });
  return;
});
