import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import {ConfigService} from "./services/config.service";
import {TokenInterceptor} from "./services/authToken.interceptor";
import { AuthGuard } from "./guards/auth.guard";
import { TranslateComponent } from './components/translator/translate/translate.component';
import { TranslateService } from './services/translate.service';
import {ImageAnalysisService} from "./services/image-analysis.service";

import { TranslateAudioComponent } from './components/translator/translate-audio/translate-audio.component';
import { TranslateImageComponent } from './components/translator/translate-image/translate-image.component';


import { WebCamModule } from 'ack-angular-webcam';
import { TranslateTextComponent } from './components/translator/translate-text/translate-text.component';
import { SelectLanguagesComponent } from './components/translator/select-languages/select-languages-component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { CookieService } from 'ngx-cookie-service';
import { SelectedLanguagesService } from "./services/selected-languages/selected-languages.service";

const appRoutes: Routes =  [
  {path:'', component: TranslateComponent},
  // {path:'register', component: RegisterComponent},
  // {path:'login', component: LoginComponent},
  // {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  // {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  // {path:'translate', component: TranslateComponent},
  // {path:'**', redirectTo: ''}
]

@NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      DashboardComponent,
      ProfileComponent,
      TranslateComponent,
      TranslateImageComponent,
      TranslateAudioComponent,
      TranslateTextComponent,
      SelectLanguagesComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FlashMessagesModule.forRoot(),
      WebCamModule,
      Angular2FontawesomeModule
    ],
    providers: [
      ValidateService,
      ConfigService,
      AuthService,
      {
        provide : HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi   : true,
      },
      AuthGuard,
      TranslateService,
      ImageAnalysisService,
      CookieService,
      SelectedLanguagesService
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
