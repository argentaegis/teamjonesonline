import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectedLanguagesService } from "../../services/selected-languages/selected-languages.service";

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage {

  constructor(
    public navCtrl: NavController,
    public selectedLanguagesService: SelectedLanguagesService) {

  }

}
