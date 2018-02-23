import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class ImageAnalysisService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  imageToText(imageBase64){

    const apikey = '40d2753c22e796b29eed3db91be4223520cc6696';
    const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + apikey;

    const requestJSON = {
      'requests': [
        {
          'image': {
            'content': imageBase64
          },
          'features': [
            {
              'type': 'TEXT_DETECTION',
              'maxResults': 1
            }
          ]
        }
      ]
    };

    console.log('Req: ' + requestJSON);
    return this.http.post(url, requestJSON);
  }
}
