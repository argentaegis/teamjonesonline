import { Component, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { TranslateService } from '../../services/translate.service';
import { ImageAnalysisService } from '../../services/image-analysis.service';
import { WebCamComponent } from 'ack-angular-webcam';

const MediaStreamRecorder = require('msr');


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  @Input() sourceText: String;
  translateForm: FormGroup;
  translatedText: String;
  webcam: WebCamComponent;
  base64;
  webcamOptions: {
  };
  mediaConstraints = {
    audio: true
  };
  audioRecorder;


  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private imageAnalysisService: ImageAnalysisService) {
    this.createForm();
  }

  createForm() {
    this.translateForm = this.fb.group({
      sourceText: new FormControl(this.sourceText)
    });

  }

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

  onTranslateSubmit() {
    var sourceText = this.translateForm.value.sourceText;

    var translateRequest = {
      sourceText: this.translateForm.value.sourceText,
      sourceImage: '',
      sourceLang: 'en',
      targetLang: 'fr',
      imageBase64: ''
    }

    this.translateService.translateText(translateRequest).subscribe( data => {
      console.log(data);
      if (data.success) {
          this.updateTranslation(data.translation);
        } else {
          console.log(data.msg);
        }
      }
    );
  };

  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        console.log(reader.result);

          var translateRequest = {
            sourceText: '',
            sourceImage: '',
            sourceLang: 'fr',
            targetLang: 'en',
            imageBase64: reader.result
          };

          this.translateService.translateImage(translateRequest).subscribe( data =>{
            console.log(data);
            this.updateTranslation(data.translation);
          });
      };

    }
  }

  genBase64(){
    this.webcam.getBase64()
      .then( (data) => {
        console.log(data);
        var translateRequest = {
          sourceText: '',
          sourceImage: '',
          sourceLang: 'fr',
          targetLang: 'en',
          imageBase64: data
        }

        this.translateService.translateImage(translateRequest).subscribe( xdata =>{
          console.log(xdata);
          this.updateTranslation(xdata.translation);
        });
      });
  }

  onCamError(err) { }

  onCamSuccess() { }

  onStartRecording() {
    navigator.getUserMedia(this.mediaConstraints, (stream) => {
      this.audioRecorder = new MediaStreamRecorder(stream);
      this.audioRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
      this.audioRecorder.audioChannels = 1;
      this.audioRecorder.ondataavailable = (blob) => {
        var translateRequest = {
          sourceText: '',
          sourceImage: '',
          sourceLang: 'fr',
          targetLang: 'en',
          imageBase64: '' //blob to 64?
        };

        console.log('ondataavailable:  before call');
        //send here?
        this.translateService.translateAudio(translateRequest).subscribe( data =>{
          console.log(data);
          //this.updateTranslation(data.translation);
        });
      };
      this.audioRecorder.start(30000);

    }, this.onMediaError);


  }

  onStopRecording() {
    this.audioRecorder.stop();
    console.log('stop');

    // this.audioRecorder.ondataavailable = function(blob) {
    //   var translateRequest = {
    //     sourceText: '',
    //     sourceImage: '',
    //     sourceLang: 'fr',
    //     targetLang: 'en',
    //     imageBase64: '' //blob to 64?
    //   };
    //
    //   console.log('ondataavailable:  before call');
    //   //send here?
    //   this.translateService.translateAudio(translateRequest).subscribe( data =>{
    //     console.log(data);
    //     //this.updateTranslation(data.translation);
    //   });
    // };
    this.audioRecorder.save();

  }

  onMediaError(e) {
    console.error('media error', e);
  }
}
