/*define(["marionette"], function (Marionette) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "home",
      "contacts": "helloBuddy"
    },
    routes : {
      "contacts": "helloBuddy"
    },
    onRoute: function() {
      alert('afa0530a710b092d2f2e15a524ce949c032eaf1c')
    }
  });
 
  return Router;
});*/


define(['app', 'marionette'], function (ContactManager, Marionette) {
  'use strict';

  ContactManager.Index = {};

  var IndexRouter = Marionette.AppRouter.extend({

    appRoutes: {
      '': 'index',
      'home': 'home'
    }

  });

  requirejs(['apps/router/controller'], function (Controller) {
    ContactManager.Index.Router = new IndexRouter({
      controller: Controller
    });
  });

  return ContactManager.Index;

});