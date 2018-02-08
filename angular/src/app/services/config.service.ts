import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  baseServiceUrl: String;

  constructor() {
    this.baseServiceUrl = "http://localhost:3030/";
  }


}
