var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//change the parameters at the bottom based on returned data
var hikeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  description: {
    type: String
  }
});


var Hike = mongoose.model('Hike', hikeSchema);

module.exports = Hike;
