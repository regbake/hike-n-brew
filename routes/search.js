//route stuff for location input and stuff
var express = require("express");
var router = express.Router();
var User = require("../models/user");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");

router.get("/", function(req, res, next) {
  console.log("GET /search/ route hit");
});

router.post("/", function(req, res, next) {
  //input location
  var location = req.body.location;
  console.log("Hit the post route", location);
});

module.exports = router;
