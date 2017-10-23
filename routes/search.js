//route stuff for location input and stuff
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var expressJWT = require("express-jwt");
var jwt = require("jsonwebtoken");

router.get("/", function(req, res, next) {
  res.send("GET /search/ route hit");
})

module.exports = router;
