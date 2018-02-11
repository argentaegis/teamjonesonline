const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dbconfig = require('./config/database');
const loadJsonFile = require('load-json-file');
var http = require('http');
var AWS = require('aws-sdk');

const awsconfig = loadJsonFile.sync('./config/awsconfig.json');

AWS.config.loadFromPath('./config/awsconfig.json');
ddb = new AWS.DynamoDB({"endpoint": awsconfig.dynamoEndpoint, "region": awsconfig.region, "accessKeyId": awsconfig.accelerate, "secretAccessKey": awsconfig.secretAccessKey});


const initTables = require('./models/initializeTables');


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