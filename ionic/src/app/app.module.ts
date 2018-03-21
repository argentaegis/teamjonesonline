import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';


import { TabsPage } from '../pages/tabs/tabs';
import { TextPage } from '../pages/text/text';
import { VoicePage } from '../pages/voice/voice';
import { ImagePage } from '../pages/image/image';
import { SelectLanguagesPage } from '../pages/selectlanguages/selectlanguages';

import { SelectedLanguagesService } from '../services/selected-languages/selected-languages.service';
import { TextToMp3Service } from "../services/text-to-mp3.service";
import { TranslateService } from "../services/translate.service";
import { ConfigService } from "../services/config.service";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TextPage,
    VoicePage,
    ImagePage,
    SelectLanguagesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TextPage,
    VoicePage,
    ImagePage,
    SelectLanguagesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SelectedLanguagesService,
    TranslateService,
    TextToMp3Service,
    ConfigService,
    HTTP
  ]
})
export class AppModule {}
