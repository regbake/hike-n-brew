//route stuff for location input and stuff
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Hike = require("../models/hike");
var Brew = require("../models/brew");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");

router.get("/", function(req, res, next) {
  console.log("GET /search/ route hit");

});

router.post("/", function(req, res, next) {
  //input location
  var location = req.body.location;
  console.log("Hit the post route", location);

  //add to the db
  Brew.create({
    name: "reggie",
    location: "seattle!",
    description: "testing the mongoose db"
  }, function(err, user){
    if (err) {
      res.send(err.message)
    }
  });
});

module.exports = router;
