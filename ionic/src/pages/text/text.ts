import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from "@angular/forms";
import { NavController } from 'ionic-angular';
import { SelectedLanguagesService } from "../../services/selected-languages/selected-languages.service";
import { TextToMp3Service } from '../../services/text-to-mp3.service';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;

  nativeText: string = '';
  translateText: string = '';


  translateAudioSrc: string = '';
  originalAudioSrc: string = '';
  baseAudioLocation = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/";

  constructor(
    public navCtrl: NavController,
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service) {
  }

  ngOnInit() {
  }


  onTranslateSubmit() {

    var sourceText;
    var sourceLang;
    var targetLang;
    var translateToControlName;
    var flipped = false;

    if (this.nativeText !== '') {
      sourceText = this.nativeText;
      sourceLang = this.getSourceLanguage();
      targetLang = this.getTargetLanguage();
      translateToControlName = 'translateText';
    } else {
      sourceText = this.translateText;
      sourceLang = this.getTargetLanguage();
      targetLang = this.getSourceLanguage();
      translateToControlName = 'nativeText';
      flipped = true;
    }

    var translateRequest = {
      sourceText: sourceText,
      sourceImage: '',
      sourceLang: sourceLang,
      targetLang: targetLang,
      mediaBase64: '',
      audioFileName: this.textToMP3Service.guid()
    }


    this.translateService.translateText(translateRequest).then( response => {

      console.log(response);
        if (response.data) {
          console.log('return with data');
          console.log(JSON.stringify(response));

          console.log('data');
          console.log(response.data);

          var d = JSON.parse(response.data);
          console.log('translation');
          console.log(d.translation);
          this.updateTranslation(d.translation, translateToControlName, flipped);
        } else {
          console.log(response.error);
        }
      }
    ).catch((error) => {
      console.log('ERROR');
      console.log(JSON.stringify(error));
    });
  };

  updateTranslation(translation, translateToControlName, flipped){
    console.log('updateTranslation: ');
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

    this.translateText = translatedValue;


    const originalGuid = this.textToMP3Service.guid();
    const originalReq = {
      text: rawOriginalValue,
      lang: flipped ? this.selectedLanguageService.rightLang : this.selectedLanguageService.leftLang,
      baseFileName: originalGuid
    }

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: flipped ? this.selectedLanguageService.leftLang : this.selectedLanguageService.rightLang,
      baseFileName: translateGuid
    }


    this.textToMP3Service.textToMP3(originalReq).then( response => {
      if (flipped){
        this.translateAudioSrc = this.baseAudioLocation + originalGuid + '.mp3';
      } else {
        this.originalAudioSrc = this.baseAudioLocation + originalGuid + '.mp3';
      }
    }).catch((error) => {
      console.log('ERROR');
      console.log(error);
    });

    this.textToMP3Service.textToMP3(translatedReq).then( response => {
      if (flipped){
        this.originalAudioSrc =  this.baseAudioLocation + translateGuid + '.mp3';
      } else {
        this.translateAudioSrc = this.baseAudioLocation + translateGuid + '.mp3';
      }
    }).catch((error) => {
      console.log('ERROR');
      console.log(error);
    });
  }

  getSourceLanguage() {
    return this.selectedLanguageService.leftLang;

  }

  getTargetLanguage() {
    return this.selectedLanguageService.rightLang;
  }

  clearTextControl(controlToClear){
    if('left'){
      this.nativeText = '';
    }
    else {
      this.translateText = '';
    }
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
