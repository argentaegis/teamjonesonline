import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
const MediaStreamRecorder = require('msr');

@Component({
  selector: 'app-translate-audio',
  templateUrl: './translate-audio.component.html',
  styleUrls: ['./translate-audio.component.css']
})
export class TranslateAudioComponent implements OnInit {

  audioRecorder;
  translatedText: String;
  mediaConstraints = {
    audio: true
  };

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  onStartRecording() {
    navigator.getUserMedia(this.mediaConstraints, (stream) => {
      this.audioRecorder = new MediaStreamRecorder(stream);
      this.audioRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
      this.audioRecorder.audioChannels = 1;
      this.audioRecorder.ondataavailable = (blob) => {
        var mediaData = '';
        const reader = new FileReader();
        reader.onloadend = function () {
          mediaData = reader.result;

          var translateRequest = {
            sourceText: '',
            sourceImage: '',
            sourceLang: 'fr',
            targetLang: 'en',
            mediaBase64: mediaData
          };

          this.translateService.translateAudio(translateRequest).subscribe( data =>{
            this.updateTranslation(data.translation);
          });

          this.onStopRecording();
        }.bind(this);

        reader.readAsDataURL(blob);

      };


      this.audioRecorder.start(30000);

    }, this.onMediaError);
  }

  onStopRecording() {
    this.audioRecorder.stop();
  }

  onMediaError(e) {
    console.error('media error', e);
  };

  updateTranslation(translation){
    console.log('updateTranslation: ' + translation);
    console.log(translation);
    var translatedValue = '';

    if(Array.isArray(translation)){
      console.log('array: ' + translation);
      translation.forEach( function(trans) {
        console.log(trans);
        translatedValue = translatedValue.concat(trans.translatedText + '<br>');
        console.log(translatedValue);
      });
    } else {
      console.log('notarray: ' + translation);
      translatedValue = translation.translatedText;
    }
    this.translatedText = translatedValue;

  }
}
