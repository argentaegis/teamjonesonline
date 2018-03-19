import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {WebCamComponent} from 'ack-angular-webcam';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";

@Component({
  selector: 'app-translate-image',
  templateUrl: './translate-image.component.html',
  styleUrls: ['./translate-image.component.css']
})
export class TranslateImageComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  translatedText: string = '';
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

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private selectedLanguageService: SelectedLanguagesService
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

    if(Array.isArray(translation)){
      console.log('array: ' + translation);
      translation.forEach( function(trans) {
        console.log(trans);
        translatedValue = translatedValue.concat(trans.translatedText + '\n');
        console.log(translatedValue);
      });
    } else {
      console.log('notarray: ' + translation);
      if(translation){
        console.log('msg: ' + msg);
        if(msg == 'translated image description'){
          translatedValue = translation.translatedText + ' : ' + translation.originalText;
        }else {
          translatedValue = translation.translatedText;
        }

      } else {
        translatedValue = 'No translation available.';
      }
    }
    this.translatedText = translatedValue;

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

    this.translatedText = '';
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
  }


}
