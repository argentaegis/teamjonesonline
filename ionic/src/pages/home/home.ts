import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'home.html',
})
export class HomePage {

  orientationClass: string = 'translationsRowPortrait';

  constructor(
    private keyboard: Keyboard,
    private screenOrientation: ScreenOrientation
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.keyboard.disableScroll(false);
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

  setOrientationClass(){
    if('landscape' == this.screenOrientation.type.substring(0,this.screenOrientation.type.indexOf('-'))){
      console.log('landscape');
      this.orientationClass = 'translationsRowLandscape';
    } else {
      this.orientationClass = 'translationsRowPortrait'
    }
  }

}
