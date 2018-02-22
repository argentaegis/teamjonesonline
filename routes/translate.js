const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const googleTranslate = require('google-translate')("AIzaSyCH5vl4pfc2l7v8MbfD1Yrvhwx8vgNaxNI");
const GoogleParameters = {
  "projectId": "dean-demos",
  "keyFilename": "./DEAN Demos-40d2753c22e7.json"
}
const Vision = require('node-google-vision')
const vision = new Vision(GoogleParameters);


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
  console.log('translateText req.sourceText:' +  req.body.sourceText);
  console.log('translateText req.sourceLang:' + req.body.sourceLang);
  console.log('translateText req.targetLang:' + req.body.targetLang);

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
      console.log('translation: ' + translation);
      res.json({success: true, translation: translation});
    }
  });
  // googleTranslate.translate(
  //   req.body.sourceText,
  //   req.body.sourceLang,
  //   req.body.targetLang,
  //   (err, translation) => {
  //     if(err){
  //       console.log(err);
  //       res.json({success: false, msg: 'translation failed'});
  //     } else {
  //       console.log('translation: ' + translation);
  //       res.json({success: true, translation: translation});
  //     }
  //   }
  // );
});

router.post('/translateImage', (req, res, next) =>{
  var testFile = './angular/src/app/components/translate/test_text.jpg';
  var testFile2 = './angular/src/app/components/translate/test_text2.jpg';


  vision.textDetection(testFile2).then((detections) => {
    var textLines = detections[0].description.split(/\r?\n/);

    console.log(textLines);

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
  });
});


module.exports = router;