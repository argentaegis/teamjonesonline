const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      if(err == "Username exists")
      {
        res.json({success: false, msg:'Username exists'});
      } else {
        res.json({success: false, msg:'Failed to register user'});
      }
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// usernameExists
router.post('/usernameExists', (req, res, next) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.getUserByUsername(user.username, (err, user) => {
    if(err) {
    }
    if(!user){
      return res.json({success: false, msg: 'Username not found'});
    } else  {
      return res.json({success: true, msg: 'Username found'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        var sendUser = {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email
        };
        const token = jwt.sign(sendUser, process.env.PASSPORT_SECRET, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'Bearer '+token,
          user: sendUser
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
