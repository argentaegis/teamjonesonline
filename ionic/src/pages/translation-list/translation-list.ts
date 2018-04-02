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


  constructor(
    public currentDataService: CurrentDataService,
    private screenOrientation: ScreenOrientation
  ) {
  }




}
