requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    jquery: "vendor/jquery",
    'jquery.bootstrap': 'vendor/bootstrap',
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    spin: "vendor/spin",
    "spin.jquery": "vendor/spin.jquery",
    text: "vendor/text",
    tpl: "vendor/underscore-tpl",
    underscore: "vendor/underscore"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    'jquery.bootstrap': ['jquery'],
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    "spin.jquery": ["spin", "jquery"],
    tpl: ["text"]
  }
});

requirejs(["app"], function (ContactManager) {
  ContactManager.start();
});
