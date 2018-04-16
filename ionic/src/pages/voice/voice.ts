import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {SelectedLanguagesService} from "../../services/selected-languages/selected-languages.service";
import {TranslateService} from "../../services/translate.service";
import {TextToMp3Service} from "../../services/text-to-mp3.service";
import {CurrentDataService} from "../../services/current-data.service";

declare var WavAudioEncoder;

@Component({
  selector: 'page-voice',
  templateUrl: 'voice.html'
})
export class VoicePage {
  flipped: boolean = false;
  recording: boolean = false;
  percentageRecorded: number = 0;

  captureCfg: any = {};

  audioDataBuffer  = [];

  totalReceivedData: any = 0;


  constructor(
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService,
    public alertCtrl: AlertController) {

    this.captureCfg = {
      sampleRate: 16000,
      channels: (<any>window).audioinput.CHANNELS.MONO,
      format: (<any>window).audioinput.FORMAT.PCM_16BIT,
      audioSourceType: (<any>window).audioinput.AUDIOSOURCE_TYPE.VOICE_RECOGNITION
    };


    if ((<any>window).cordova && (<any>window).audioinput) {
      console.log("Use 'Start Capture' to begin...");

      (<any>window).addEventListener('audioinput', this.onAudioInputCapture.bind(this), false);
      (<any>window).addEventListener('audioinputerror', this.onAudioInputError, false);
    }
    else {
      console.log("cordova-plugin-audioinput not found!");
    }

  }

  startRecording(){
    console.log('startRecording');

    try {
      if ((<any>window).audioinput && !(<any>window).audioinput.isCapturing()) {

        (<any>window).audioinput.start(this.captureCfg);
        console.log("Microphone input started!");

        this.recording = true;
        this.startTimer();
      }
    }
    catch (e) {
      alert("startCapture exception: " + e);
    }
  }

  stopRecording(){
    console.log('stopRecording');

    (<any>window).audioinput.stop();
    this.recording = false;
    this.percentageRecorded = 0;

    this.encodeWav();
  }

  encodeWav(){
    var encoder = new WavAudioEncoder(this.captureCfg.sampleRate, this.captureCfg.channels);
    encoder.encode([this.audioDataBuffer]);

    console.log("Encoding WAV finished");

    var blob = encoder.finish("audio/wav");

    console.log("BLOB created");

    var reader = new FileReader();

    var mediaData = '';
    console.log('reader ready');
    reader.onloadend = function () {
      mediaData = reader.result;

      var translateRequest = {
        sourceText: '',
        sourceImage: '',
        sourceLang: this.getSourceLanguage(),
        targetLang: this.getTargetLanguage(),
        mediaBase64: mediaData,
        audioFileName: this.textToMP3Service.guid()
      };

      console.log('translateRequest');
      console.log(JSON.stringify(translateRequest));

      this.translateService.translateAudio(translateRequest).then( response =>{
        console.log('***RESPONSE***');
        console.log(JSON.stringify(response.data));

        var transData = JSON.parse(response.data);

        this.updateTranslation(transData.translation);
      }).catch((error: any) => {
        console.log('translateService.translateAudio error');
        console.log(JSON.stringify(error));
        this.showNetworkErrorAlert();
      });

      this.audioDataBuffer = [];

    }.bind(this);
    reader.readAsDataURL(blob);

  };


  updateTranslation(translation){
    console.log('updateTranslation:');
    console.log( JSON.stringify(translation));

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



    const originalGuid = this.textToMP3Service.guid();

    const translateGuid = this.textToMP3Service.guid();
    const translatedReq = {
      text: rawTranslatedValue,
      lang: this.flipped ? this.selectedLanguageService.rightLang : this.selectedLanguageService.leftLang,
      baseFileName: translateGuid
    }

    this.currentDataService.addTranslation(rawOriginalValue, originalGuid, rawTranslatedValue, translateGuid, translatedReq)
  }


  onAudioInputCapture(evt) {
    try {
      if (evt && evt.data) {
        // Increase the debug counter for received data
        this.totalReceivedData += evt.data.length;

        // Add the chunk to the buffer
        this.audioDataBuffer = this.audioDataBuffer.concat(evt.data);
      }
      else {
        alert("Unknown audioinput event!");
      }
    }
    catch (ex) {
      alert("onAudioInputCapture ex: " + ex);
    }
  };

  onAudioInputError(error) {
    alert("onAudioInputError event recieved: " + JSON.stringify(error));
  }

  startTimer(){
    setTimeout(function(){
      this.percentageRecorded =
        this.percentageRecorded + 0.33;
      if(this.recording){
        this.startTimer();
      }
      else{
        this.percentageRecorded = 0;
      }
    }.bind(this), 100);
  }

  getTargetLanguage() {
    if(this.flipped){
      return this.selectedLanguageService.rightLang;
    } else{
      return this.selectedLanguageService.leftLang;
    }
  }

  getSourceLanguage() {
    if(this.flipped) {
      return this.selectedLanguageService.leftLang;

    } else {
      return this.selectedLanguageService.rightLang;
    }
  }

  flipLanguages(event, fab){
    this.stopRecording();
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

  getPercentWidth(){
    var v = {'width' : this.percentageRecorded.toString() + "%"};

    return v;
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
