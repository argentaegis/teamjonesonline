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
  };
  imageSource: String;
  translating: Boolean;

  tryAgainMessage: 'Please try again';
  translateImageForm: FormGroup;

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

  genBase64Image(){

    this.translating = true;

    this.webcam.getBase64()
      .then( (imageData) => {

        this.imageSource = imageData;

        var translateRequest = {
          sourceText: '',
          sourceImage: '',
          sourceLang: this.getSourceLanguage(),
          targetLang: this.getTargetLanguage(),
          mediaBase64: imageData
        }

        this.translateService.translateImage(translateRequest).subscribe( res =>{
          if(res.success){
            console.log(res);
            this.updateTranslation(res.translation);
            this.translating = false;
          } else {
            this.updateTranslation(this.tryAgainMessage);
            this.translating = false;
          }

        });
      });

  }

  onCamError(err) { }

  onCamSuccess() { }

  public getSourceLanguage(){
    return this.parentForm.controls['selectLanguagesForm'].value.nativeLanguageSelect;

  }

  public getTargetLanguage(){
    return this.parentForm.controls['selectLanguagesForm'].value.foreignLanguageSelect;
  }

}
