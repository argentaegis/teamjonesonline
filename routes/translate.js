const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const googleTranslate = require('google-translate')("AIzaSyCH5vl4pfc2l7v8MbfD1Yrvhwx8vgNaxNI");

// Translate text
router.post('/translateText', (req, res, next) =>{
  console.log('translateText req.sourceText:' +  req.body.sourceText);
  console.log('translateText req.sourceLang:' + req.body.sourceLang);
  console.log('translateText req.targetLang:' + req.body.targetLang);

  googleTranslate.translate(
    req.body.sourceText,
    req.body.sourceLang,
    req.body.targetLang,
    (err, translation) => {
      if(err){
        console.log(err);
        res.json({success: false, msg: 'translation failed'});
      } else {
        console.log('translation: ' + translation);
        res.json({success: true, translation: translation});
      }
    }
  );
})

module.exports = router;