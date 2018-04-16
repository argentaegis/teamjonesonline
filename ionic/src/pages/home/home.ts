import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TranslateService} from "../../services/translate.service";
import { AdService } from '../../services/ad-service';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewChecked{

  orientationClass: string = 'translationsRowPortrait';
  @ViewChild('scrollWrapper') private myScrollContainer: ElementRef;

  constructor(
    private keyboard: Keyboard,
    private screenOrientation: ScreenOrientation,
    public translateService: TranslateService,
    private adService: AdService,
    platform: Platform
  ) {
      platform.ready().then(() => {
        this.adService.start();
        //this.adService.displayBanner();
        this.adService.displayBanner();
      });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.keyboard.disableScroll(true);
    this.keyboard.hideKeyboardAccessoryBar(true);
    this.keyboard.show();
    this.setOrientationClass();
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Home Orientation Changed");
        this.setOrientationClass();
      }
    );
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  setOrientationClass(){
    if('landscape' == this.screenOrientation.type.substring(0,this.screenOrientation.type.indexOf('-'))){
      console.log('landscape');
      this.orientationClass = 'translationsRowLandscape';
    } else {
      this.orientationClass = 'translationsRowPortrait'
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.log('ERR');
      console.log(err);
    }
  }





}
