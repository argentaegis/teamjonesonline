import { Injectable } from '@angular/core';
import { ConfigService } from "./config.service";
import { HTTP } from '@ionic-native/http';

@Injectable()
export class TextToMp3Service {

  constructor(
    private http: HTTP,
    private config: ConfigService
  ) {
    this.http.setDataSerializer('json');
  }


  textToMP3(request) {
    var url = this.config.baseServiceUrl + '/textToMP3/createNew';

    return this.http.post(url, request, {});
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
