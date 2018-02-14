require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dbconfig = require('./config/database');


console.log('DEBUG: ' + process.env.DEBUG);

const dynamoose = require('dynamoose');

if(process.env.DEBUG === 'true')
{
  dynamoose.local();
}


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