require('dotenv').config();
const express = require('express');
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
//
// var testFile = './angular/src/app/components/translate/test_text.jpg';
// var testFile2 = './angular/src/app/components/translate/test_text2.jpg';
//
// const Vision = require('node-google-vision')
//
// // Set your Google Cloud credentials
// const GoogleParameters = {
//   "projectId": "dean-demos",
//   "keyFilename": "./DEAN Demos-40d2753c22e7.json"
// }
//
// const vision = new Vision(GoogleParameters);
//
// vision.textDetection(testFile2).then((detections) => {
//
//   detections.forEach(text => console.log(text));
// });



const app = express();
const users = require('./routes/users');
const translate = require('./routes/translate');


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/translate', translate);


app.get('/', (req, res) => {
  res.send('index');
});

app.listen(port, () => {
  console.log('Server started  on port ' + port);
});