import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from "@angular/forms";
import { SelectedLanguagesService } from "../../services/selected-languages/selected-languages.service";
import { TextToMp3Service } from '../../services/text-to-mp3.service';
import { TranslateService } from '../../services/translate.service';
import {CurrentDataService} from "../../services/current-data.service";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage implements OnInit {
  @Input('parentForm')
  public parentForm: FormGroup;

  nativeText: string = '';
  translateText: string = '';
  debugText: string = '';
  flipped: boolean = false;


  translateAudioSrc: string = '';
  originalAudioSrc: string = '';

  constructor(
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService,
    public alertCtrl: AlertController ) {
  }

  ngOnInit() {
  }


  onTranslateSubmit() {
    this.debugText += '\n submit';

    var sourceText;
    var sourceLang;
    var targetLang;
    var translateToControlName;
    var flipped = false;

    this.originalAudioSrc = '';
    this.translateAudioSrc = '';

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

    this.debugText += '\n translateRequest \n';

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

          var transData = JSON.parse(response.data);
          this.updateTranslation(transData.translation, translateToControlName, flipped);
        } else {
          console.log('translateService.translateText ERROR')
          console.log(JSON.stringify(response.error));
        }
      }
    ).catch((error: any) => {
      console.log('error');
      console.log(JSON.stringify(error));
      this.showNetworkErrorAlert(error);
    });
  };

  updateTranslation(translation, translateToControlName, flipped){
    this.debugText += '\n updateTranslation';
    this.debugText += '\n translation \n';
    this.debugText += JSON.stringify(translation);
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

    this.translateText = translatedValue;


    const originalGuid = this.textToMP3Service.guid();

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: flipped ? this.selectedLanguageService.leftLang : this.selectedLanguageService.rightLang,
      baseFileName: translateGuid
    }

    this.currentDataService.addTranslation(rawOriginalValue, originalGuid, rawTranslatedValue, translateGuid, translatedReq)

    this.nativeText = '';
  }

  getSourceLanguage() {
    if(this.flipped){
      return this.selectedLanguageService.rightLang;
    } else{
      return this.selectedLanguageService.leftLang;
    }

  }

  getTargetLanguage() {
    if(this.flipped) {
      return this.selectedLanguageService.leftLang;

    } else {
      return this.selectedLanguageService.rightLang;
    }
  }

  flipLanguages(event, fab){
    this.flipped = !this.flipped;
    fab.close();
  }

  showNetworkErrorAlert(error) {
    let alert = this.alertCtrl.create({
      title: 'Network Error!',
      subTitle: 'There seems to be a problem with your network connection.',
      //subTitle: JSON.stringify(error),
      buttons: ['OK']
    });
    alert.present();
  }
}
