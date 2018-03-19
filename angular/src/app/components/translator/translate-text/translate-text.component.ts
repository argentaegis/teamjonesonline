import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TranslateService} from "../../../services/translate.service";
import {SelectedLanguagesService} from "../../../services/selected-languages/selected-languages.service";
import {TextToMp3Service} from "../../../services/text-to-mp3.service";

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


  translateAudioSrc: string = '';
  originalAudioSrc: string = '';
  baseAudioLocation = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/";

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private selectedLanguageService: SelectedLanguagesService,
    private textToMP3Service: TextToMp3Service
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
      sourceLang = this.getSourceLanguage();
      targetLang = this.getTargetLanguage();
      translateToControlName = 'translateText';
    } else {
      sourceText = this.translateTextForm.value.translateText;
      sourceLang = this.getTargetLanguage();
      targetLang = this.getSourceLanguage();
      translateToControlName = 'nativeText';
    }

    var translateRequest = {
      sourceText: sourceText,
      sourceImage: '',
      sourceLang: sourceLang,
      targetLang: targetLang,
      mediaBase64: '',
      audioFileName: this.textToMP3Service.guid()
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
    var rawOriginalValue = translation.originalText;
    var rawTranslatedValue = translation.translatedText;


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


    const originalGuid = this.textToMP3Service.guid();
    const originalReq = {
      text: rawOriginalValue,
      lang: this.selectedLanguageService.leftLang,
      baseFileName: originalGuid
    }

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: this.selectedLanguageService.rightLang,
      baseFileName: translateGuid
    }


    this.textToMP3Service.textToMP3(originalReq).subscribe( data => {
      this.originalAudioSrc = this.baseAudioLocation + originalGuid + '.mp3';
    })

    this.textToMP3Service.textToMP3(translatedReq).subscribe( data => {
      this.translateAudioSrc = this.baseAudioLocation + translateGuid + '.mp3';
    })
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

  playAudio(originalOrTranslated){
    let audio = new Audio();
    if(originalOrTranslated == 'original'){
      audio.src = this.originalAudioSrc;
    } else if (originalOrTranslated === 'translated') {
      audio.src = this.translateAudioSrc;
    }
    audio.load();
    audio.play();
  }

}
