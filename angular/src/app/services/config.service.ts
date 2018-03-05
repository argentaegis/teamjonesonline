import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  baseServiceUrl: String;

  constructor() {
    this.baseServiceUrl = "https://www.tucomprends.com/";
    //this.baseServiceUrl = "https://translate-env.us-east-2.elasticbeanstalk.com/";
    //this.baseServiceUrl = "https://localhost:8443/";
  }


}
