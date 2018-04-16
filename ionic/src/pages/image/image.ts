import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {CurrentDataService} from "../../services/current-data.service";
import {SelectedLanguagesService} from "../../services/selected-languages/selected-languages.service";
import {TranslateService} from "../../services/translate.service";
import {TextToMp3Service} from "../../services/text-to-mp3.service";
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {
  flipped: boolean = false;

  imageOptions: CameraOptions;

  constructor(
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService,
    private camera: Camera,
    public alertCtrl: AlertController) {

    this.imageOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,
      targetHeight: 400
    }
  }

  captureImage(){

    this.camera.getPicture(this.imageOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      var translateRequest = {
        sourceText: '',
        sourceImage: '',
        sourceLang: this.getTargetLanguage(),
        targetLang: this.getSourceLanguage(),
        mediaBase64: base64Image,
        audioFileName: ''
      }

      this.translateService.translateImage(translateRequest).then( response => {
        console.log('***RESPONSE***');
        console.log(JSON.stringify(response.data));

        var transData = JSON.parse(response.data);

        this.updateTranslation(transData.translation, transData.msg);
      }).catch((error: any) => {
        console.log('translateService.translateAudio error');
        console.log(JSON.stringify(error));
        this.showNetworkErrorAlert();
      });


    }, (err) => {

      console.log('captureImage error');
      console.log(JSON.stringify(err));
    });
  }

  updateTranslation(translation, msg){
    console.log('updateTranslation:');
    console.log( JSON.stringify(translation));

    var translatedValue = '';
    var originalValue = '';
    var rawOriginalValue = translation.originalText;
    var rawTranslatedValue = translation.translatedText;

    if(Array.isArray(translation)){
      console.log('array: ' + translation);
      translation.forEach( function(trans) {
        console.log(trans);
        rawTranslatedValue = translatedValue.concat(trans.translatedText + ' ');
        translatedValue = translatedValue.concat(trans.translatedText + '\n');
        rawOriginalValue = originalValue.concat(trans.originalText + ' ');
        originalValue = originalValue.concat(trans.originalText + '\n');
        console.log(translatedValue);
      });
    } else {
      console.log('notarray: ' + translation);
      if(translation){
        console.log('msg: ' + msg);
        if(msg == 'translated image description'){
          translatedValue = translation.translatedText;
          originalValue = translation.originalText;
        }else {
          translatedValue = translation.translatedText;
          originalValue = translation.originalText;
        }

      } else {
        translatedValue = 'No translation available.';
      }
    }

    const originalGuid = this.textToMP3Service.guid();

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: this.flipped ? this.selectedLanguageService.rightLang : this.selectedLanguageService.leftLang,
      baseFileName: translateGuid
    }

    this.currentDataService.addTranslation(rawOriginalValue, originalGuid, rawTranslatedValue, translateGuid, translatedReq)
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

  getCurrentModeIcon(){
    if(this.translateService.currentMode == 'text'){
      return 'list';
    }
    else if(this.translateService.currentMode == 'voice'){
      return 'mic';
    }
    else if(this.translateService.currentMode == 'image'){
      return 'camera'
    }
  }

  showNetworkErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Network Error!',
      subTitle: 'There seems to be a problem with your network connection.',
      buttons: ['OK']
    });
    alert.present();
  }
}
