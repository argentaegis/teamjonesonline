import {Component, ViewChild } from '@angular/core';
import {CurrentDataService} from "../../services/currend-data.service";
import { Content } from 'ionic-angular';

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
  @ViewChild('content') content: Content;



  constructor(
    public currentDataService: CurrentDataService
  ) {
  }
}
