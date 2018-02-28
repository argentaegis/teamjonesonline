import {Component, Input, OnInit} from '@angular/core';
import { TranslateService } from '../../../services/translate.service';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
    private translateService: TranslateService
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
    this.parentForm.addControl('translateAudioForm', this.translateAudioForm);

    this.onLanguageSelectionChanges();
  }

  onLanguageSelectionChanges(): void {
    this.parentForm.get('selectLanguagesForm').valueChanges.subscribe(val => {

    });
  }

  onStartRecording() {
    this.recording = true;
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

      };


      this.audioRecorder.start(30000);

    }, this.onMediaError);
  }

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
      return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
    } else {
      return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
    }
  }

  getTargetLanguage() {
    if(this.flipSource) {
      return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
    } else {
      return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;
    }
  }
}
