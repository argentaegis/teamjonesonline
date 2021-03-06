import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    keyboard: Keyboard
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideKeyboardAccessoryBar(true);
      keyboard.disableScroll(false);
    });
  }
}
