require('dotenv').config();
const express = require('express');
const helmet = require('helmet')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const dynamoose = require('dynamoose');

console.log('DEV: ' + process.env.DEV);

const port = process.env.SERVERPORT;
const httpsPort = process.env.HTTPSSERVERPORT;

if(process.env.DEV === 'true')
{
  dynamoose.local();
}

const app = express();
app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

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


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(port, () => {
  console.log('Server started on port ' + port);
});
httpsServer.listen(httpsPort, () => {
  console.log('HTTPS server started on port ' + httpsPort);
});

// app.listen(port, () => {
//   console.log('Server started  on port ' + port);
// });