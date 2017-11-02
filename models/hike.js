var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//change the parameters at the bottom based on returned data
var hikeSchema = new mongoose.Schema({
  name: {
    city: String
  },
  state: {
    type: String
  },
  description: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  length: {
    type: Number
  },
  thumbnail: {
    type: String
  },
});


var Hike = mongoose.model('Hike', hikeSchema);

module.exports = Hike;
