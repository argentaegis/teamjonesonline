import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';



@Injectable()
export class TextToSpeechService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  textToAudioStreem(ttsRequest){
    var url = this.config.baseServiceUrl + '/textToSpeech/audiostream';

    return this.http.post<any>(url, ttsRequest);
  }
}
