import { Injectable } from '@angular/core';

@Injectable()
export class CurrentDataService {

  translations: Array<any> = [];

  constructor() {

  }

  addTranslation(newOriginal, originalGuid, newTranslated, translateGuid){
    var translatedItem = {
      original: newOriginal,
      oGuid: originalGuid,
      translated: newTranslated,
      tGuid: translateGuid
    }

    this.translations.push(translatedItem);
  }
}
