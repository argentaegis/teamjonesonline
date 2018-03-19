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

const languages = require('./languages.json');




const googleAPIKey = process.env.GOOGLE_API_KEY;

const googleTranslate = GoogleTranslate(googleAPIKey);
vision.init({auth: googleAPIKey});




translateText = function(translateRequest, callback){
  console.log('In text');
  console.log(translateRequest);
  if(translateRequest.sourceLang.code == translateRequest.targetLang.code && translateRequest.targetLang.code == 'en'){
    callback(null, {translatedText: translateRequest.sourceText, originalText: translateRequest.sourceText});
  } else {
    googleTranslate.translate(
      translateRequest.sourceText,
      translateRequest.sourceLang.code,
      translateRequest.targetLang.code,
      (err, translation) => {
        callback(err, translation);
      }
    );
  }

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
  var image = req.body.mediaBase64.split(',')[1];

  const visionRequest = new vision.Request({
    image: new vision.Image({
      base64: image
    }),
    features: [
      new vision.Feature('TEXT_DETECTION', 1),
      new vision.Feature('LABEL_DETECTION', 1)
    ]
  })

  vision.annotate(visionRequest).then((translation) => {
    var textLines = [];
    var translateRequest;
    if(translation.responses
        && translation.responses[0]
        && translation.responses[0].textAnnotations) {
      var textData = translation.responses[0].textAnnotations[0].description;
      textLines = textData.split('\n');

      translateRequest = {
        sourceText: textLines,
        sourceLang: req.body.sourceLang,
        targetLang: req.body.targetLang
      }

      translateText(translateRequest, (err, translation) => {
        console.log(1);
        if(err){
          console.log(err);
          res.json({success: false, msg: 'translation failed'});
        } else {
          res.json({success: true, translation: translation});
        }
      })

    } else {
      if(translation.responses
        && translation.responses[0]
        && translation.responses[0].labelAnnotations){

        var imageDescription = translation.responses[0].labelAnnotations[0].description;


        translateRequest = {
          sourceText: imageDescription,
          sourceLang: {
            "code": "en",
            "longCode": "en-US",
            "name": "English",
            "nativeName": "English",
            "icon": "",
            "voice": "Joanna"
          },
          targetLang: req.body.targetLang
        }


        translateText(translateRequest, (err, translation) => {
          if (err) {
            console.log("ERROR");
            console.log(err);
            res.json({success: false, msg: 'translation failed'});
          } else {
            var imageTranslation = translation.translatedText;

            var innerTranslateRequest = {
              sourceText: translation.originalText,
              sourceLang: {
                "code": "en",
                "longCode": "en-US",
                "name": "English",
                "nativeName": "English",
                "icon": "",
                "voice": "Joanna"
              },
              targetLang: req.body.sourceLang
            }

            translateText(innerTranslateRequest, (err, translation) => {

              console.log(3);
              if (err) {
                console.log(err);
                res.json({success: false, msg: 'translation failed'});
              } else {
                console.log(translation);

                var imageOriginalText = translation.translatedText;
                translation.translatedText = imageTranslation;
                translation.originalText = imageOriginalText;

                res.json({success: true, translation: translation, msg: 'translated image description'});
              }
            })
          }
        });
      }
    }
  }, (err) => {
    console.log('Error: ' + err);
    res.json({success: false, msg: 'translation failed'});
  })

});

router.post('/translateAudio', (req, res, next) => {
  const client = new speech.SpeechClient(GoogleParameters);

  const config = {
    encoding: 'LPCM',
    languageCode: req.body.sourceLang.code
  };

  const audio = {
    content: req.body.mediaBase64.split(',')[1]
  };

  const request = {
    audio: audio,
    config: config
  };

  client
    .recognize(request)
    .then(data => {
      const response = data[0];
      const transcription = response.results.map(result => result.alternatives[0].transcript)
       .join('\n');


      var translateRequest = {
        sourceText: transcription,
        sourceLang: req.body.sourceLang,
        targetLang: req.body.targetLang
      }

      translateText(translateRequest, (err, translation) => {
        if(err){
          console.log(err);
          res.json({success: false, msg: 'translation failed'});
        } else {
          res.json({success: true, translation: translation});
        }
      })
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

router.post('/supportedLanguages', (req, res, next) => {
  res.json({success: true, languages: languages.languages})
});




module.exports = router;