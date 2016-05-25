/*define(["marionette"], function (Marionette) {

  var Controller = Marionette.Controller.extend({
    initialize: function (options) {
      //TODO: code to initialize
    },
    start: function () {
      //TODO: code to start
    },

    home: function () {
      alert('Hello Marionette');
    },
    helloBuddy: function (buddy) {
      // Without controller the routing functions live in Router object
      alert("Hello ");
    }
  });

  return Controller;
});*/


define(['app', 'marionette'], function (ContactManager, Marionette) {
  'use strict';

  ContactManager.Controller = Marionette.Controller.extend({

    index: function () {
      alert('1');
      ContactManager.navigate('home', { trigger: true })
//      ContactManager.State.isUserLoggedIn() ? ContactManager.navigate('home', { trigger: true }) : ContactManager.navigate('signin', { trigger: true });
    },

    home: function () {
      alert('2')
      /*if (ContactManager.State.isUserLoggedIn()) {
        ContactManager.execute('Show:Header', ContactManager.Storage.get('Entities.User'));
        ContactManager.execute('Show:Main', function () {
          ContactManager.execute('Show:Breadcrumb', [ { name: 'Loading...', link: '#', active: true } ]);
          ContactManager.execute('Show:Sidebar');
        });
      } else {
        ContactManager.navigate('signin', { trigger: true });
      }*/
    }

  });

  return new ContactManager.Controller();

});