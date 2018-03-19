const express = require('express');
const router = express.Router();
const https = require('https');



router.post('/createNew', (req, res, next) => {

  const apiHostname = '6b3vxkzjj1.execute-api.us-east-2.amazonaws.com';
  const apiPath = '/beta/'

  console.log('TTM3');

  var body =  {
      "text": req.body.text,
      "dest": req.body.baseFileName + '.mp3',
      "lang": req.body.lang.longCode,
      "voice": req.body.lang.voice
  }


  var options = {
    hostname: apiHostname,
    path: apiPath,
    method: 'POST',
    headers: {
      "content-type": "application/json"
    }
  };

  const apiReq = https.request(options, (apiRes) => {
    apiRes.on('data', () => {
      res.json({ready:true});
    })
  });

  apiReq.on('error', (err) => {
    console.log('ERROR');
    console.log(err);
    res.json({ready:false});
  });

  console.log('API Body');
  console.log(body);
  apiReq.write(JSON.stringify(body));

  apiReq.end();
});






module.exports = router;