const express = require('express');
const router = express.Router();
const GoogleTranslate = require('google-translate');
const vision = require('node-cloud-vision-api-comoc')

const speech = require('@google-cloud/speech');
const fs = require('fs');

const GoogleParameters = {
  "projectId": "dean-demos",
  "keyFilename": "./DEAN Demos-40d2753c22e7.json"
}




const googleAPIKey = process.env.GOOGLE_API_KEY;

const googleTranslate = GoogleTranslate(googleAPIKey);
vision.init({auth: googleAPIKey});




translateText = function(translateRequest, callback){
  googleTranslate.translate(
    translateRequest.sourceText,
    translateRequest.sourceLang,
    translateRequest.targetLang,
    (err, translation) => {
      callback(err, translation);
    }
  );
}

// Translate text
router.post('/translateText', (req, res, next) =>{

  var translateRequest = {
    sourceText: req.body.sourceText,
    sourceLang: req.body.sourceLang,
    targetLang: req.body.targetLang
  }

  translateText(translateRequest, (err, translation) =>{
    if(err){
      console.log(err);
      res.json({success: false, msg: 'translation failed'});
    } else {
      res.json({success: true, translation: translation});
    }
  });
});

router.post('/translateImage', (req, res, next) =>{
  var image = req.body.imageBase64.split(',')[1];

  console.log(image);

  const visionRequest = new vision.Request({
    image: new vision.Image({
      base64: image
    }),
    features: [
      new vision.Feature('TEXT_DETECTION', 1)
    ]
  })

  vision.annotate(visionRequest).then((translation) => {
    var textData = translation.responses[0].textAnnotations[0].description;
    var textLines = textData.split('\n');
    console.log('translation: ' + textData);


     console.log(textData);

     var translateRequest = {
       sourceText: textLines,
       sourceLang: req.body.sourceLang,
       targetLang: req.body.targetLang
     }

     translateText(translateRequest, (err, translation) => {
       if(err){
         console.log(err);
         res.json({success: false, msg: 'translation failed'});
       } else {
         console.log('translation: ' + translation);
         res.json({success: true, translation: translation});
       }
     })
  }, (err) => {
    console.log('Error: ' + err);
    res.json({success: false, msg: 'translation failed'});
  })
});

router.post('/translateAudio', (req, res, next) => {

// Creates a client
  const client = new speech.SpeechClient(GoogleParameters);

  // The name of the audio file to transcribe
  const fileName = './angular/src/app/components/translate/audio_1.wav';

  console.log('wav file: ' + fileName);


  const config = {
    encoding: 'LPCM',
    languageCode: 'en-US',
  };

  const audio = {
    content: fs.readFileSync(fileName ).toString('base64'),
  };

  const request = {
    audio: audio,
    config: config,
  };

// Detects speech in the audio file
  client
    .recognize(request)
    .then(data => {
      const response = data[0];
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log(`Transcription: ${transcription}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});




module.exports = router;