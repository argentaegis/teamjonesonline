import {Component} from '@angular/core';
import {CurrentDataService} from "../../services/current-data.service";
import {ScreenOrientation} from "@ionic-native/screen-orientation";


/**
 * Generated class for the TranslationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'translation-list',
  templateUrl: 'translation-list.html'
})
export class TranslationListComponent {


  baseAudioLocation = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/";

  constructor(
    public currentDataService: CurrentDataService,
    private screenOrientation: ScreenOrientation
  ) {
  }





  playAudio(guid){
    let audio = new Audio();
    audio.src = this.baseAudioLocation + guid + '.mp3';
    audio.load();
    audio.play();
  }

}
