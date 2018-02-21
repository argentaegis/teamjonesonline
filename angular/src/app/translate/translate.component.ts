import { Component, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
const googleTranslate = require('google-translate')("AIzaSyCH5vl4pfc2l7v8MbfD1Yrvhwx8vgNaxNI");

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
    private fb: FormBuilder) {
    this.createForm();
    this.translatedText = "hi";
  }

  createForm(){
    this.translateForm = this.fb.group({
      sourceText: new FormControl(this.sourceText)
    });
  }

  updateTranslation( err, translation){
    console.log('ERR: ' + err);
    console.log('Translation: ' + translation.translatedText);
    this.translatedText = translation.translatedText;
  }

  onTranslateSubmit() {
    var source = this.translateForm.value.sourceText;

    console.log(source);
    googleTranslate.translate(
      source,
      'en',
      'fr',
      (err, translation) => this.updateTranslation(err, translation)
    );

  };



}
