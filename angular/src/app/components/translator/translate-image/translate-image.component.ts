import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {WebCamComponent} from 'ack-angular-webcam';

@Component({
  selector: 'app-translate-image',
  templateUrl: './translate-image.component.html',
  styleUrls: ['./translate-image.component.css']
})
export class TranslateImageComponent implements OnInit {
  translatedText: String;
  webcam: WebCamComponent;
  base64;
  webcamOptions: {
  };
  imageSource: String;
  translating: Boolean;

  tryAgainMessage: 'Please try again';

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
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
          sourceLang: 'fr',
          targetLang: 'en',
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

}
