import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewChecked{

  orientationClass: string = 'translationsRowPortrait';
  @ViewChild('scrollWrapper') private myScrollContainer: ElementRef;

  constructor(
    private keyboard: Keyboard,
    private screenOrientation: ScreenOrientation
  ) {

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
    console.log('scrollToBottom');
    try {
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollTop);
      console.log('Pre: ' + this.myScrollContainer.nativeElement.scrollHeight);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      console.log('POST: ' + this.myScrollContainer.nativeElement.scrollTop);
    } catch(err) {
      console.log('ERR');
      console.log(err);
    }
  }

}
