import { Component, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
//const googleTranslate = require('google-translate')("AIzaSyCH5vl4pfc2l7v8MbfD1Yrvhwx8vgNaxNI");
import { TranslateService } from '../../services/translate.service';
import { ImageAnalysisService } from "../../services/image-analysis.service";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent  {
  @Input() sourceText: String;
  translateForm: FormGroup;
  translatedText: String;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private imageAnalysisService: ImageAnalysisService) {
    this.createForm();
    this.translatedText = "hi";
  }

  createForm(){
    this.translateForm = this.fb.group({
      sourceText: new FormControl(this.sourceText)
    });
  }

  updateTranslation(translation){
    console.log('updateTranslation: ' + translation);
    console.log(translation);
    var translatedValue = '';

    if(Array.isArray(translation)){
      translation.forEach( function(trans) {
        console.log(trans);
        translatedValue = translatedValue.concat(trans.translatedText + '\n');
        console.log(translatedValue);
      });
    }
    else {
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

  // onTranslateTestTextImage() {
  //   var translateRequest = {
  //     sourceText: '',
  //     sourceImage: '',
  //     sourceLang: 'fr',
  //     targetLang: 'en'
  //   }
  //
  //   this.translateService.translateImage(translateRequest).subscribe( data =>{
  //     console.log(data);
  //     this.updateTranslation(data.translation);
  //   });
  //
  // }

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
          }

          this.translateService.translateImage(translateRequest).subscribe( data =>{
            console.log(data);
            this.updateTranslation(data.translation);
          });

        // this.imageAnalysisService.imageToText(reader.result).subscribe( data =>
        // {
        //   console.log('Back data: ' + data);
        //
        //   var textLines = data[0].description.split(/\r?\n/);
        //
        //   console.log(textLines);
        // });
      };

    }
  }
}
