angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Property A',
    lastText: 'Double Story Terrace',
    face: 'img/PropertyList.jpg'
  }, {
    id: 1,
    name: 'Property B',
    lastText: 'Condominium',
    face: 'img/PropertyList.jpg'
  }, {
    id: 2,
    name: 'Property C',
    lastText: 'Apartment',
    face: 'img/PropertyList.jpg'
  }, {
    id: 3,
    name: 'Property D',
    lastText: 'Single Story Terrace',
    face: 'img/PropertyList.jpg'
  }, {
    id: 4,
    name: 'Property E',
    lastText: 'Landed Bungalow',
    face: 'img/PropertyList.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
