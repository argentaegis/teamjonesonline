import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {WebCamComponent} from 'ack-angular-webcam';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-translate-image',
  templateUrl: './translate-image.component.html',
  styleUrls: ['./translate-image.component.css']
})
export class TranslateImageComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;
  translatedText: String;
  webcam: WebCamComponent;
  base64;
  webcamOptions: {
    width: 50,
    height: 50
  };
  imageSource: String;
  translating: Boolean;

  tryAgainMessage: 'Please try again';
  translateImageForm: FormGroup
  cameraOn: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
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
          sourceLang: this.getTargetLanguage().code,
          targetLang: this.getSourceLanguage().code,
          mediaBase64: imageData
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

  getSourceLanguage(){
    return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;

  }

  getTargetLanguage(){
    return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
  }

  turnCameraOn() {
    this.cameraOn = true;
  }


}
