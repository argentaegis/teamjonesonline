import { Component, Input, OnInit } from '@angular/core';
import {TextToMp3Service} from "../../services/text-to-mp3.service";

/**
 * Generated class for the TranslateLineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'translate-line',
  templateUrl: 'translate-line.html'
})
export class TranslateLineComponent implements OnInit {
  @Input() item: any;
  isDisabled: boolean = true;

  baseAudioLocation = "https://s3.us-east-2.amazonaws.com/teamjonesonline-translate-audio/";
  
  constructor(

    private textToMP3Service: TextToMp3Service
  ) {
    console.log('Hello TranslateLineComponent Component');
  }

  ngOnInit(){
    this.textToMP3Service.textToMP3(this.item.req).then( response => {
      console.log('back from mp3');
      console.log(response);
      this.isDisabled = false;
    });
  }

  playAudio(guid){
    let audio = new Audio();
    audio.src = this.baseAudioLocation + guid + '.mp3';
    audio.load();
    audio.play();
  }

  getDisabled(){
    return this.isDisabled;
  }
}
