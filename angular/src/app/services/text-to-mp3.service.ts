import { Injectable } from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TextToMp3Service {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }


  textToMP3(request) {
    var url = this.config.baseServiceUrl + '/textToMP3/createNew';

    return this.http.post<any>(url, request);
  }


  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    var newguid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return newguid;
  }
}
