import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TranslateService} from "../../../services/translate.service";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";

@Component({
  selector: 'app-translate-text',
  templateUrl: './translate-text.component.html',
  styleUrls: ['./translate-text.component.css']
})
export class TranslateTextComponent implements OnInit {

  @Input('parentForm')
  public parentForm: FormGroup;

  nativeText: string;
  translateTextForm: FormGroup;
  translateText: string;

  audioSrc: string;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private selectedLanguageService: SelectedLanguagesService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.parentForm.addControl('translateTextForm', this.translateTextForm);
  }

  createForm() {
    this.translateTextForm = this.fb.group({
      nativeText: new FormControl(this.nativeText),
      translateText: new FormControl(this.translateText)
    });
  }

  onTranslateSubmit() {
    var sourceText;
    var sourceLang;
    var targetLang;
    var translateToControlName;

    if (this.translateTextForm.value.nativeText !== '') {
      sourceText = this.translateTextForm.value.nativeText;
      sourceLang = this.getSourceLanguage().code;
      targetLang = this.getTargetLanguage().code;
      translateToControlName = 'translateText';
    } else {
      sourceText = this.translateTextForm.value.translateText;
      sourceLang = this.getTargetLanguage().code;
      targetLang = this.getSourceLanguage().code;
      translateToControlName = 'nativeText';
    }

    var translateRequest = {
      sourceText: sourceText,
      sourceImage: '',
      sourceLang: sourceLang,
      targetLang: targetLang,
      mediaBase64: ''
    }

    this.translateService.translateText(translateRequest).subscribe( data => {
        console.log(data);
        if (data.success) {
          this.updateTranslation(data.translation, translateToControlName);
        } else {
          console.log(data.msg);
        }
      }
    );
  };

  updateTranslation(translation, translateToControlName){

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

    this.translateTextForm.controls[translateToControlName].setValue(translatedValue);
  }

  getSourceLanguage() {
      return this.selectedLanguageService.leftLang;

  }

  getTargetLanguage() {
      return this.selectedLanguageService.rightLang;
  }

  clearTextControl(controlToClear){
    this.translateTextForm.controls[controlToClear].setValue('');
  }

  clearForm(){
    this.clearTextControl('nativeText');
    this.clearTextControl('translateText');
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/hello_test_file4.mp3";
    audio.load();
    audio.play();
  }

}
