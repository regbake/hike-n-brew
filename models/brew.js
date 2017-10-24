var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//change the parameters at the bottom based on returned data
var brewSchema = new mongoose.Schema({
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


var Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;
