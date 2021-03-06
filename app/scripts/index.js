//console.log('Hello World!');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageCollection = require('./models/images');
var ImageBoardView = require('./components/image-board.jsx');
// var FormComponent = require('./components/form.jsx');
// var ListingComponent = require('./components/listing.jsx');


$(function(){
  var imageCollection = new ImageCollection();

  imageCollection.fetch().done(function(){
    ReactDOM.render(
      React.createElement(ImageBoardView, {images: imageCollection}),
      document.getElementById('app')
    );
  });
});
