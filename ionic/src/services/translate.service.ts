import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import {ConfigService} from './config.service';
import { Language } from './selected-languages/selected-languages.service';
import { AdService } from './ad-service';

@Injectable()
export class TranslateService {


  public currentMode: string = 'text';


  constructor(
    private http: HTTP,
    private config: ConfigService,
    private adService: AdService ) {

    this.http.setDataSerializer('json');
    this.http.setRequestTimeout(10.0);
  }

  translateText(translateRequest: TranslateRequest){
    var url = this.config.baseServiceUrl + '/translate/translateText';

    return this.http.post(url, translateRequest, {});
  }

  translateImage(translateRequest: TranslateRequest){
    var url = this.config.baseServiceUrl + '/translate/translateImage';

    return this.http.post(url, translateRequest, {});
  }

  translateAudio(translateRequest: TranslateRequest){
    var url = this.config.baseServiceUrl + '/translate/translateAudio';
    console.log('sending req to : ' + url);

    return this.http.post(url, translateRequest, {});
  }


  setMode(event, fab, mode){
    this.currentMode = mode;
    this.adService.displayInterstitial();
    fab.close();

  }
}



export interface TranslateRequest {
  sourceText: string;
  sourceImage: string;
  sourceLang: Language;
  targetLang: Language;
  mediaBase64: string;
  audioFileName: string;
}
