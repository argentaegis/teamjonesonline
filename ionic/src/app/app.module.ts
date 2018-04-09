import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';

import { TextPage } from '../pages/text/text';
import { VoicePage } from '../pages/voice/voice';
import { ImagePage } from '../pages/image/image';
import { TranslationListComponent } from "../pages/translation-list/translation-list";
import { SelectLanguagesPage } from '../pages/selectlanguages/selectlanguages';

import { SelectedLanguagesService } from '../services/selected-languages/selected-languages.service';
import { TextToMp3Service } from "../services/text-to-mp3.service";
import { TranslateService } from "../services/translate.service";
import { ConfigService } from "../services/config.service";
import { CurrentDataService } from "../services/current-data.service";
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {TranslateLineComponent} from "../pages/translate-line/translate-line";
import { AdService } from '../services/ad-service';
import { AdMobFree } from '@ionic-native/admob-free';

import { MediaCapture } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    MyApp,
    TextPage,
    VoicePage,
    ImagePage,
    TranslationListComponent,
    SelectLanguagesPage,
    HomePage,
    TranslateLineComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TextPage,
    VoicePage,
    ImagePage,
    TranslationListComponent,
    SelectLanguagesPage,
    HomePage,
    TranslateLineComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SelectedLanguagesService,
    TranslateService,
    TextToMp3Service,
    ConfigService,
    HTTP,
    CurrentDataService,
    Keyboard,
    ScreenOrientation,
    AdMobFree,
    AdService,
    MediaCapture
  ]
})
export class AppModule {}
