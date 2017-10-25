var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//change the parameters at the bottom based on returned data
var brewSchema = new mongoose.Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  overall: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: String
  },
  street: {
    type: String
  },
  zip: {
    type: String
  },
  lat: {
    type: Number
  },
  lon: {
    type: Number
  }
});


var Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;
