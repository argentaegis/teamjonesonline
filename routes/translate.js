const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const GoogleTranslate = require('google-translate');
const vision = require('node-cloud-vision-api-comoc')

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




module.exports = router;