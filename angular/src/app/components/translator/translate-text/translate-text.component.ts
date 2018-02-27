import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TranslateService} from "../../../services/translate.service";

@Component({
  selector: 'app-translate-text',
  templateUrl: './translate-text.component.html',
  styleUrls: ['./translate-text.component.css']
})
export class TranslateTextComponent implements OnInit {
  @Input() sourceText: String;
  translateForm: FormGroup;
  translatedText: String;
  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.translateForm = this.fb.group({
      sourceText: new FormControl(this.sourceText)
    });

  }

  onTranslateSubmit() {
    var sourceText = this.translateForm.value.sourceText;

    var translateRequest = {
      sourceText: this.translateForm.value.sourceText,
      sourceImage: '',
      sourceLang: 'en',
      targetLang: 'fr',
      mediaBase64: ''
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
}
