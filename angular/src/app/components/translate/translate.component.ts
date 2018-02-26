import { Component, Input } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { TranslateService } from '../../services/translate.service';





@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  @Input() sourceText: String;
  translateForm: FormGroup;
  translatedText: String;


  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService) {
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
            mediaBase64: reader.result
          };

          this.translateService.translateImage(translateRequest).subscribe( data =>{
            console.log(data);
            this.updateTranslation(data.translation);
          });
      };

    }
  }

}
