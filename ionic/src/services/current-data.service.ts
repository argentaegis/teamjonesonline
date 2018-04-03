import { Injectable, OnInit  } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable()

export class CurrentDataService implements OnInit{

  translations: Array<any> = [];
  translationData: Observable<any>;
  private translationSubject: Subject<any>;

  constructor() {

    this.translationSubject = new Subject<Array<any>>();
    this.translationData = this.translationSubject.asObservable();

    this.addTranslation('1','1','1','1', {});
    this.addTranslation('2', '2', '2', '2', {});

    this.addTranslation('3', '2', '3', '2', {});

    this.addTranslation('4', '2', '4', '2', {});

    this.addTranslation('5', '2', '5', '2', {});

    this.addTranslation('6', '2', '6', '2', {});

    this.addTranslation('7', '2', '7', '2', {});
    this.addTranslation('8', '2', '8', '2', {});
    this.addTranslation('9', '2', '9', '2', {});
    this.addTranslation('1','1','1','1', {});
    this.addTranslation('2', '2', '2', '2', {});

    this.addTranslation('3', '2', '3', '2', {});

    this.addTranslation('this is a very long item to read so you can see what happens when it is very long and if it wraps or runs off and such sorts of things because that could look bad'
      , '2', 'this is a very long item to read so you can see what happens when it is very long and if it wraps or runs off and such sorts of things because that could look bad', '2', {});

  }

  ngOnInit(){
    console.log('CDS init');


  }
  addTranslation(newOriginal, originalGuid, newTranslated, translateGuid, transReq){
    var translatedItem = {
      original: newOriginal,
      oGuid: originalGuid,
      translated: newTranslated,
      tGuid: translateGuid,
      req: transReq
    }


    this.translations.push(translatedItem);
    this.translationSubject.next(translatedItem);
  }


}
