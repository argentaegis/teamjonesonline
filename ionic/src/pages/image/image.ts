import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CurrentDataService} from "../../services/current-data.service";
import {SelectedLanguagesService} from "../../services/selected-languages/selected-languages.service";
import {TranslateService} from "../../services/translate.service";
import {TextToMp3Service} from "../../services/text-to-mp3.service";

@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {
  flipped: boolean = false;

  constructor(
    public navCtrl: NavController,
    public selectedLanguageService: SelectedLanguagesService,
    private translateService: TranslateService,
    private textToMP3Service: TextToMp3Service,
    private currentDataService: CurrentDataService) {
  }

  captureImage(){

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
