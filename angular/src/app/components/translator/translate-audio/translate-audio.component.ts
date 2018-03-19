import {Component, Input} from '@angular/core';
import { TranslateService } from '../../../services/translate.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";
import {TextToMp3Service} from "../../../services/text-to-mp3.service";
const MediaStreamRecorder = require('msr');

@Component({
  selector: 'app-translate-audio',
  templateUrl: './translate-audio.component.html',
  styleUrls: ['./translate-audio.component.css']
})
export class TranslateAudioComponent {

  @Input('parentForm')
  public parentForm: FormGroup;
  audioRecorder;
  translatedText: string = '';
  originalText: string = '';
  mediaConstraints = {
    audio: true,
    video: false
  };
  translateAudioForm: FormGroup;
  recording: boolean;
  flipSource: boolean;
  audioStream: any;


  translateAudioSrc: string = '';
  originalAudioSrc: string = '';
  baseAudioLocation = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/";


  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private selectedLanguageService: SelectedLanguagesService,
    private textToMP3Service: TextToMp3Service
  ) {
    this.createForm();
    this.recording = false;
    this.flipSource = false;
  }

  createForm(){
    this.translateAudioForm = this.fb.group({
    });
  }


  onStartRecording() {
    this.recording = true;

    if(this.audioStream){
      this.onMediaSuccess(this.audioStream);
    }
    navigator.getUserMedia(this.mediaConstraints, this.onMediaSuccess.bind(this), this.onMediaError.bind(this));
  };

  onStopRecording() {
    this.audioRecorder.stop();
    this.recording = false;
  }

  onMediaError(e) {
    console.error('media error', e);
  };

  onMediaSuccess(stream) {
    this.audioRecorder = new MediaStreamRecorder(stream);
    this.audioRecorder.mimeType = 'audio/wav';
    this.audioRecorder.audioChannels = 1;
    this.audioRecorder.ondataavailable = function (blob) {
      var mediaData = '';

      const reader = new FileReader();
      reader.onloadend = function () {
        mediaData = reader.result;


        this.originalAudioSrc = '';
        this.translateAudioSrc = '';

        var translateRequest = {
          sourceText: '',
          sourceImage: '',
          sourceLang: this.getSourceLanguage(),
          targetLang: this.getTargetLanguage(),
          mediaBase64: mediaData
        };

        console.log('translateRequest');
        console.log(translateRequest);
        this.translateService.translateAudio(translateRequest).subscribe( data =>{
          console.log('Returned with: ' + JSON.stringify(data));
          this.updateTranslation(data.translation);
        });

        this.onStopRecording();
      }.bind(this);
      reader.readAsDataURL(blob);

    }.bind(this);
    this.audioRecorder.start(3000);
  }

  updateTranslation(translation){
    console.log('updateTranslation: ' + translation);
    console.log(translation);
    var translatedValue = '';
    var originalValue = '';

    var rawOriginalValue = translation.originalText;
    var rawTranslatedValue = translation.translatedText;

    if(Array.isArray(translation)){
      console.log('array: ' + translation);
      translation.forEach( function(trans) {
        console.log(trans);
        translatedValue = translatedValue.concat(trans.translatedText + '<br>');
        originalValue = originalValue.concat(trans.originalText + '<br>');
        console.log(translatedValue);
      });
    } else {
      console.log('notarray: ' + translation);
      translatedValue = translation.translatedText;
      originalValue = translation.originalText;
    }
    this.translatedText = translatedValue;
    this.originalText = originalValue;

    const originalGuid = this.textToMP3Service.guid();
    const originalReq = {
      text: rawOriginalValue,
      lang: this.getSourceLanguage(),
      baseFileName: originalGuid
    }

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: this.getTargetLanguage(),
      baseFileName: translateGuid
    }


    this.textToMP3Service.textToMP3(originalReq).subscribe( data => {
      this.originalAudioSrc = this.baseAudioLocation + originalGuid + '.mp3';
    })

    this.textToMP3Service.textToMP3(translatedReq).subscribe( data => {
      this.translateAudioSrc = this.baseAudioLocation + translateGuid + '.mp3';
    })


  }

  getSourceLanguage() {
    if(this.flipSource) {
      return this.selectedLanguageService.leftLang;
    } else {
      return this.selectedLanguageService.rightLang;
    }
  }

  getTargetLanguage() {
    if(this.flipSource) {
      return this.selectedLanguageService.rightLang;
    } else {
      return this.selectedLanguageService.leftLang;
    }
  }

  flipTranslation() {
    this.flipSource = !this.flipSource;
    this.clearForm();
  }

  clearForm(){
    this.originalText = '';
    this.translatedText = '';
  }

  playAudio(originalOrTranslated){
    let audio = new Audio();
    if(originalOrTranslated == 'original'){
      audio.src = this.originalAudioSrc;
    } else if (originalOrTranslated === 'translated') {
      audio.src = this.translateAudioSrc;
    }
    audio.load();
    audio.play();
  }
}
