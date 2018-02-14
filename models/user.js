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
  console.log('getUserByUsername: ' + username);
  //const query = {username: username};
  User.query('username').eq(username).exec(function (err, user){
    console.log('got user: ' + user[0]);
    callback(err, user[0]);
  });
};

module.exports.addUser = function(newUser, callback){
  console.log('addUser');
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidate, hash, callback) {
  console.log('comparePassword');
  bcrypt.compare(candidate, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};