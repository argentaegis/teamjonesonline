import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import {ConfigService} from './config.service';
import { Language } from './selected-languages/selected-languages.service';

@Injectable()
export class TranslateService {

  constructor(
    private http: HTTP,
  private config: ConfigService
  ) {

    this.http.setDataSerializer('json');
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

}


export interface TranslateRequest {
  sourceText: string;
  sourceImage: string;
  sourceLang: Language;
  targetLang: Language;
  mediaBase64: string;
  audioFileName: string;
}
