require('dotenv').config();
const express = require('express');
const helmet = require('helmet')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const dynamoose = require('dynamoose');

console.log('DEV: ' + process.env.DEV);

const port = process.env.SERVERPORT;


if(process.env.DEV === 'true')
{
  dynamoose.local();
}

const app = express();
app.use(helmet());


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


const users = require('./routes/users');
const translate = require('./routes/translate');

app.use('/users', users);
app.use('/translate', translate);


app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log('Server started  on port ' + port);
});