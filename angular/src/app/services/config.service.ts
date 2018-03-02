import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  baseServiceUrl: String;

  constructor() {
    this.baseServiceUrl = "http://translate-env.us-east-2.elasticbeanstalk.com/";
  }


}
