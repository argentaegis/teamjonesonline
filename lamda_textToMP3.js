{
  "text": "Welcome aboard",
  "dest": "hello_test_file2.mp3",
  "lang": "en-US",
  "voice": "Joanna"
}


exports.handler = (event, context, callback) => {
  // TODO implement
  //callback(null, 'Hello from Lambda');

  var AWS = require('aws-sdk');
  var polly = new AWS.Polly();
  var s3 = new AWS.S3();


  var pollyParams = {
    //LanguageCode: event.lang,
    OutputFormat: "mp3",
    Text: event.text,
    VoiceId: event.voice
  };

  var response = 'TEXT: ' + event.text;



  polly.synthesizeSpeech(pollyParams, function(err, data) {
    if (err) {
      console.log(err, err.stack);
      callback(err);
    }
    else {
      response = response + JSON.stringify(data);

      writeAudioStreamToS3(data.AudioStream, event.dest).then( s3Response => {

        callback(null, JSON.stringify(s3Response));
      });
    }
    /*
    data = {
     AudioStream: <Binary String>,
     ContentType: "audio/mpeg",
     RequestCharacters: 37
    }
    */
  });

  const writeAudioStreamToS3 = ( audioStream, filename ) =>
    putObject('teamjonesonline-translate-audio', filename, audioStream,'audio/mp3').then( res => {
      if(!res.ETag) throw res
      else return {
        msg: 'File successfully generated.',
        ETag: res.ETag
      }
    })

  const putObject = (bucket, key, body, contentType) =>
    s3.putObject({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType
    }).promise()

};