import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectedLanguagesService} from "../../services/selected-languages/selected-languages.service";
import {TranslateService} from "../../services/translate.service";
import {TextToMp3Service} from "../../services/text-to-mp3.service";
import {CurrentDataService} from "../../services/current-data.service";

@Component({
  selector: 'page-voice',
  templateUrl: 'voice.html'
})
export class VoicePage {
  flipped: boolean = false;
  recording: boolean = false;
  percentageRecorded: number = 0;

  constructor(
    public navCtrl: NavController,
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService) {

  }

  startRecording(){
    this.recording = true;

    this.startTimer();
  }

  stopRecording(){
    this.recording = false;
    this.percentageRecorded = 0;
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
}
