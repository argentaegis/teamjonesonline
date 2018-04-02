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

  constructor(
    public navCtrl: NavController,
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService) {

  }

  startRecording(){
    this.recording = true;
  }

  stopRecording(){
    this.recording = false;
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
}
