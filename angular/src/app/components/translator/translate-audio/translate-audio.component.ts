import {Component, Input, OnInit} from '@angular/core';
import { TranslateService } from '../../../services/translate.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";
const MediaStreamRecorder = require('msr');

@Component({
  selector: 'app-translate-audio',
  templateUrl: './translate-audio.component.html',
  styleUrls: ['./translate-audio.component.css']
})
export class TranslateAudioComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  audioRecorder;
  translatedText: String;
  originalText: String;
  mediaConstraints = {
    audio: true
  };
  translateAudioForm: FormGroup;
  recording: boolean;
  flipSource: boolean;


  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private selectedLanguageService: SelectedLanguagesService
  ) {
    this.createForm();
    this.recording = false;
    this.flipSource = false;

  }

  createForm(){
    this.translateAudioForm = this.fb.group({
    });
  }
  ngOnInit() {
  }

  onStartRecording() {
    this.recording = true;
    navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(function(stream){
      this.audioRecorder = new MediaStreamRecorder.StereoAudioRecorder(stream);

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
            sourceLang: this.getSourceLanguage().code,
            targetLang: this.getTargetLanguage().code,
            mediaBase64: mediaData
          };

          console.log('translateRequest');
          console.log(translateRequest);
          this.translateService.translateAudio(translateRequest).subscribe( data =>{
            this.updateTranslation(data.translation);
          });

          this.onStopRecording();
        }.bind(this);

        reader.readAsDataURL(blob);

      }

      this.audioRecorder.start(30000);

    }.bind(this) );
  };

  onStopRecording() {
    this.audioRecorder.stop();
    this.recording = false;
  }

  onMediaError(e) {
    console.error('media error', e);
  };

  updateTranslation(translation){
    console.log('updateTranslation: ' + translation);
    console.log(translation);
    var translatedValue = '';
    var originalValue = '';

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
}
