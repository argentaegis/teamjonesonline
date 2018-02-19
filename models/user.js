const dynamoose = require('dynamoose');
const bcrypt = require('bcryptjs');

var Schema = dynamoose.Schema;

var UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      hashKey: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    throughput: {read: 15, write: 5}
  });


const User = module.exports = dynamoose.model('User', UserSchema);;

module.exports.getUserByUsername = function(username, callback) {
  User.query('username').eq(username).exec(function (err, user){
    callback(err, user[0]);
  });
};

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      User.getUserByUsername(newUser.username, (err, user) => {
          if(err){
            throw err;
          }
          if(user){
            callback("Username exists", user);
          }
          else {
            newUser.password = hash;
            newUser.save(callback);
          }
      });
    });
  });
};

module.exports.comparePassword = function(candidate, hash, callback) {
  bcrypt.compare(candidate, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};