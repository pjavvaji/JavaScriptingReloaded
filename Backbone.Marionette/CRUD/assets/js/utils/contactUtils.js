define([], function () {

  var contactUtils = function () {};
  var Datastore = require('nedb'),
    path = require('path'),
    db = new Datastore({
      filename: path.join(require('nw.gui').App.dataPath, 'Storage/contacts.db'),
      autoload: true
    });
  contactUtils.prototype.findData = function (crieteria, cb) {
    var _crieteria = crieteria || {},
      _cb = cb || function () {};
    db.find(_crieteria, function (err, docs) {
      _cb(docs);
    })
  };

  contactUtils.prototype.insertData = function (contact, cb) {
    var _cb = cb || function () {};
    db.insert({
      fname: contact.get('fname'),
      lname: contact.get('lname'),
      id: contact.get('id')
    }, function (err, newDoc) {
      if (!err) {
        cb();
      }
    })
  };

  contactUtils.prototype.removeData = function (contact, cb) {
    var _cb = cb || function () {};
    db.remove({
      id: contact.get('id')
    }, {}, function (err, numRemoved) {
      cb(numRemoved);
    });
  };

  contactUtils.prototype.updateData = function (contact, cb) {
    var _cb = cb || function () {};
    db.update({
      id: contact.get('id')
    }, {
      $set: {
        fname: contact.get('fname'),
        lname: contact.get('lname'),
      }
    }, {}, function (err, numReplaced) {
      if (numReplaced > 0) {
        cb(true);
      }
    });
  };


  return new contactUtils();
});
