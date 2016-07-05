var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({
  // initialize: function(){
  //   console.log('initialized');
  // },
  idAttribute: '_id',
  defaults: {
    'url': '',
    'caption': ''
  }
});


var ImageCollection = Backbone.Collection.extend({
  model: ImageModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/ksimages'
});


module.exports = ImageCollection;
