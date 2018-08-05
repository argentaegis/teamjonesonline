import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from "@ionic-native/admob-free";
import { CurrentDataService } from "./current-data.service";

@Injectable()
export class AdService {

  canDisplayInterstitial: boolean = false;
  interstitialReady: boolean = false;
  adConfig: any;


  constructor( private admobFree: AdMobFree,
               private cds: CurrentDataService) {
    this.adConfig = {
      banner: 'ca-app-pub-4032953517610324/4093986742',
      interstitial: 'ca-app-pub-4032953517610324/8955240573',
      testing: false
    };
  }

  start(){
    console.log("starting AdService");

    this.setupBanner();
    this.setupInterstitial();
  }

  setupBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: this.adConfig.banner,
      isTesting: this.adConfig.testing,
      autoShow: false
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        this.cds.logToTranslationlist('banner ready');
        this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
  }

  setupInterstitial(){
    this.startInterstitialTimer();

    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: this.adConfig.interstitial,
      isTesting: this.adConfig.testing,
      autoShow: false
    }

    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare().then(() =>
    {
      this.cds.logToTranslationlist('interstitial ready');
      this.interstitialReady = true;
    }).catch( e => this.cds.logToTranslationlist(e));
  }

  displayInterstitial(){
    console.log('displayInterstitial')

    this.cds.logToTranslationlist('can Display interstitial: ' + this.canDisplayInterstitial);
    this.cds.logToTranslationlist('interstitial is ready: ' + this.interstitialReady);

    if(this.canDisplayInterstitial && this.interstitialReady) {
      this.cds.logToTranslationlist('.interstitial.show()')
      this.admobFree.interstitial.show();
      this.setupInterstitial();
    }
  }

  startInterstitialTimer(){
    this.canDisplayInterstitial = false;
    setTimeout(function(){
      this.cds.logToTranslationlist('interstitial timer up');
      this.canDisplayInterstitial = true;
    }.bind(this), 120000);
    //}.bind(this), 30000);
  }
}
