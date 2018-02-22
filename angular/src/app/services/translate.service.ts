import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class TranslateService {

  constructor(
    private http: HttpClient,
  private config: ConfigService
  ) { }

  translateText(translateRequest: TranslateRequest){
    var url = this.config.baseServiceUrl + 'translate/translateText';

    return this.http.post<TranslateResponse>(url, translateRequest);
  }

}


export interface TranslateResponse {
  success: boolean;
  translation: string;
  msg: string;
}

export interface TranslateRequest {
  sourceText: string;
  sourceLang: string;
  targetLang: string;
}
