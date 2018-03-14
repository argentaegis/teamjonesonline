import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectedLanguagesService } from "../../services/selected-languages/selected-languages.service";
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-selectlanguages',
  templateUrl: 'selectlanguages.html'
})
export class SelectLanguagesPage {

  constructor(
    public navCtrl: NavController,
    private selectedLanguageService: SelectedLanguagesService,
    public actionSheetCtrl: ActionSheetController) {

  }

  selectLanguage(leftOrRight) {
    var buttonArray = [];

    this.selectedLanguageService.languagesSupported.forEach(function(lang) {
      var currentButton = {
        text: lang.nativeName + " / " + lang.name,
        handler: () => {
          this.selectedLanguageService.setLanguageByCode(leftOrRight, lang.code);
        }
      }

      buttonArray.push(currentButton);
    }.bind(this));


    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Language',
      buttons: buttonArray
    });
    actionSheet.present();
  }

}
