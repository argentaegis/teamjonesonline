import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {WebCamComponent} from 'ack-angular-webcam';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";
import {TextToMp3Service} from "../../../services/text-to-mp3.service";

@Component({
  selector: 'app-translate-image',
  templateUrl: './translate-image.component.html',
  styleUrls: ['./translate-image.component.css']
})
export class TranslateImageComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  translatedText: string = '';
  originalText: string = '';
  webcam: WebCamComponent;
  base64;
  webcamOptions: {
    audio: true,
    video: false
  };
  imageSource: string;
  translating: boolean;
  flipSource: boolean;

  tryAgainMessage: 'Please try again';
  translateImageForm: FormGroup
  cameraOn: boolean = false;
  facingMode: string = 'environment';
  useParentWidthHeight: boolean = true;


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
  }


  createForm(){
    this.translateImageForm = this.fb.group({

    });
  }

  ngOnInit() {
    this.parentForm.addControl('translateImageForm', this.translateImageForm);
  }

  updateTranslation(translation, msg){
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
        rawTranslatedValue = translatedValue.concat(trans.translatedText + ' ');
        translatedValue = translatedValue.concat(trans.translatedText + '\n');
        rawOriginalValue = originalValue.concat(trans.originalText + ' ');
        originalValue = originalValue.concat(trans.originalText + '\n');
        console.log(translatedValue);
      });
    } else {
      console.log('notarray: ' + translation);
      if(translation){
        console.log('msg: ' + msg);
        if(msg == 'translated image description'){
          translatedValue = translation.translatedText;
          originalValue = translation.originalText;
        }else {
          translatedValue = translation.translatedText;
          originalValue = translation.originalText;
        }

      } else {
        translatedValue = 'No translation available.';
      }
    }
    this.translatedText = translatedValue;
    this.originalText = originalValue;

    const originalGuid = this.textToMP3Service.guid();
    const originalReq = {
      text: rawOriginalValue,
      lang: this.getTargetLanguage(),
      baseFileName: originalGuid
    }

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: this.getSourceLanguage(),
      baseFileName: translateGuid
    }

    if(originalReq.lang.hasPolly){
      this.textToMP3Service.textToMP3(originalReq).subscribe( data => {
        this.originalAudioSrc = this.baseAudioLocation + originalGuid + '.mp3';
      })
    }


    if(translatedReq.lang.hasPolly){
      this.textToMP3Service.textToMP3(translatedReq).subscribe( data => {
        this.translateAudioSrc = this.baseAudioLocation + translateGuid + '.mp3';
      })
    }

  }

  genBase64Image(){

    this.translating = true;

    this.webcam.getBase64()
      .then( (imageData) => {

        this.imageSource = imageData;

        var translateRequest = {
          sourceText: '',
          sourceImage: '',
          sourceLang: this.getTargetLanguage(),
          targetLang: this.getSourceLanguage(),
          mediaBase64: imageData,
          audioFileName: ''
        }

        this.originalAudioSrc = '';
        this.translateAudioSrc = '';

        this.translateService.translateImage(translateRequest).subscribe( res =>{
          if(res.success){
            console.log(res);
            this.updateTranslation(res.translation, res.msg);
            this.translating = false;
          } else {
            this.updateTranslation(this.tryAgainMessage, res.msg);
            this.translating = false;
          }

        });
      });
  }

  onCamError(err) { }

  onCamSuccess() { }

  flipTranslation() {
    this.flipSource = !this.flipSource;

    this.resetFields();
  }


  getSourceLanguage() {
    if(this.flipSource) {
      return this.selectedLanguageService.rightLang;
    } else {
      return this.selectedLanguageService.leftLang;
    }
  }

  getTargetLanguage() {
    if(this.flipSource) {
      return this.selectedLanguageService.leftLang;
    } else {
      return this.selectedLanguageService.rightLang;
    }
  }

  turnCameraOn() {
    this.cameraOn = true;
    this.resetFields();
  }


  resetFields(){
    this.translatedText = '';
    this.originalText = '';
    this.originalAudioSrc = '';
    this.translateAudioSrc = '';
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
