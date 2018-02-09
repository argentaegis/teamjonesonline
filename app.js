const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dbconfig = require('./config/database');

var http = require('http');
var AWS = require('aws-sdk');


AWS.config.loadFromPath('./awsconfig.json');
console.log('aws configed');

ddb = new AWS.DynamoDB({"endpoint": "http://127.0.0.1:8000", "region": "us-east-1", "accessKeyId": "accesskey", "secretAccessKey": "secretaccesskey"});
console.log('dynamo ddb');

ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames);
  }
});

const app = express();
const users = require('./routes/users');


const port = 3030;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);


app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log('Server started  on port ' + port);
});