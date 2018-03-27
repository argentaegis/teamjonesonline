import { Injectable } from '@angular/core';
const languages = require('./languages.json');

@Injectable()
export class SelectedLanguagesService {
  public leftLang : Language;
  public rightLang : Language;
  public languagesSupported : Language[];


  constructor(
  ) {
    this.languagesSupported = languages.languages;
    this.setStartingLanguage();
  }

  setStartingLanguage() {
    var left;
    var right;

    if(!left) {
      console.log('!NATIVE');
      left = 'en';
    }

    if(!right) {
      console.log('!FOREIGN');
      right = 'fr';
    }

    this.leftLang = this.getSupportedLanguageByCode(left);
    this.rightLang = this.getSupportedLanguageByCode(right);
  }

  getSupportedLanguageByCode(langCode){
    return this.languagesSupported.filter(function( obj ) {
      return obj.code == langCode;
    })[0];
  }

  setLanguageByCode(leftOrRight, langCode){
    const selectedLang = this.getSupportedLanguageByCode(langCode);

    if(leftOrRight === 'left'){
      this.leftLang = selectedLang;
    }

    if(leftOrRight === 'right'){
      this.rightLang = selectedLang;
    }
  }
}


export interface Language {
  code: string;
  longCode: string;
  name: string;
  nativeName: string;
  icon: string;
  voice: string;
}
