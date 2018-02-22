import { Component, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
//const googleTranslate = require('google-translate')("AIzaSyCH5vl4pfc2l7v8MbfD1Yrvhwx8vgNaxNI");
//const vision = require('@google-cloud/vision');
import { TranslateService } from '../../services/translate.service';

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
    private translateService: TranslateService) {
    this.createForm();
    this.translatedText = "hi";
  }

  createForm(){
    this.translateForm = this.fb.group({
      sourceText: new FormControl(this.sourceText)
    });
  }

  updateTranslation(translation){
    console.log('Translation: ' + translation.translatedText);
    this.translatedText = translation.translatedText;
  }

  onTranslateSubmit() {
    var sourceText = this.translateForm.value.sourceText;

    var translateRequest = {
      sourceText: this.translateForm.value.sourceText,
      sourceLang: 'en',
      targetLang: 'fr'
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
    // var source = this.translateForm.value.sourceText;
    //
    // console.log(source);
    // googleTranslate.translate(
    //   source,
    //   'en',
    //   'fr',
    //   (err, translation) => this.updateTranslation(err, translation)
    // );

  };

  onTranslateTestTextImage() {
    console.log('ttti');
  }

}
