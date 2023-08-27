const express = require("express");
const member = express.Router();
const mongo = require("../model/mongo_member");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

member.post("/reg", async (req, res) => {
  console.log(req.body);

  var checkEmail = await mongo.find({ email: req.body.email });

  let salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hash(req.body.password, salt);

  if (checkEmail.length == 0) {
    var object = {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    };
    await mongo.create(object);
    res.json({ msg: "Submitted" });
  } else {
    res.json({ msg: "Email already exists" });
  }
});

member.post("/login", async (req, res) => {
  var em = req.body.email;
  var pass = req.body.password;

  var checkEmail = await mongo.findOne({ email: em });

  if (checkEmail != null) {
    bcrypt.compare(pass, checkEmail.password, async (err, result) => {
      if (err) {
        res.json({ msg: "Invalid Login" });
      } else {
        if (result == true) {
          var udata = {
            name: checkEmail.name,
            email: checkEmail.email,
            id: checkEmail._id,
          };
          var token = await jwt.sign(udata, "key");
          res.json({ myToken: token });
        } else {
          res.json({ msg: "Invalid Login" });
        }
      }
    });
  } else {
    res.json({ msg: "No data found" });
  }
});

member.get("/getu", middle, async (req, res) => {
  jwt.verify(req.token, "key", (err, userData) => {
    if (err) {
      res.json({ msg: "Invalid" });
    } else {
      res.json(userData);
    }
  });
});

function middle(req, res, next) {
  // if (1 == 1) {
  //   next();
  // } else {
  //   res.send("i am middleware");
  // }
  var fullToken = req.headers.authorization;
  if (typeof fullToken != "undefined") {
    var tkn = fullToken.split(" ");
    req.token = tkn[1];
    next();
  } else {
    res.json({ msg: "Invalid" });
  }
}

module.exports = member;
