import { Injectable, OnInit  } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable()

export class CurrentDataService implements OnInit{

  translations: Array<any> = [];
  translationData: Observable<any>;
  private translationSubject: Subject<any>;

  constructor() {
    // this.addTranslation('1','1','1','1');
    // this.addTranslation('2', '2', '2', '2');
    //
    // this.addTranslation('3', '2', '3', '2');
    //
    // this.addTranslation('4', '2', '4', '2');
    //
    // this.addTranslation('5', '2', '5', '2');
    //
    // this.addTranslation('6', '2', '6', '2');
    //
    // this.addTranslation('7', '2', '7', '2');
    // this.addTranslation('8', '2', '8', '2');
    // this.addTranslation('9', '2', '9', '2');
    this.translationSubject = new Subject<Array<any>>();
    this.translationData = this.translationSubject.asObservable();
  }

  ngOnInit(){


  }
  addTranslation(newOriginal, originalGuid, newTranslated, translateGuid){
    var translatedItem = {
      original: newOriginal,
      oGuid: originalGuid,
      translated: newTranslated,
      tGuid: translateGuid
    }


    this.translations.push(translatedItem);
    this.translationSubject.next(translatedItem);
  }
}
