const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/database');




const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username};
  User.findOne(query, callback);
};

module.exports.schema = {
  TableName: 'User',
  KeySchema: [
    {AttributeName: "username", KeyType: "HASH"},  //Partition key
  ],
  AttributeDefinitions: [
    {AttributeName: "username", AttributeType: "S"}
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidate, hash, callback) {
  bcrypt.compare(candidate, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};