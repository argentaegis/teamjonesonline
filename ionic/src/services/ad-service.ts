import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig} from "@ionic-native/admob-free";

@Injectable()
export class AdService {

  canDisplayInterstitial: boolean = false;
  adConfig: any;

  constructor( private admobFree: AdMobFree) {
    this.adConfig = {
      banner: 'ca-app-pub-4032953517610324/4093986742',
      interstitial: 'ca-app-pub-4032953517610324/8955240573',
      testing: false
    };

    // this.adConfig = {
    //   banner: 'ca-app-pub-3940256099942544/6300978111',
    //   interstitial: 'ca-app-pub-3940256099942544/1033173712',
    //   testing: true
    // }
  }

  start(){
    console.log("starting AdService");


    this.startInterstitialTimer();
  }

  displayBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: this.adConfig.banner,
      isTesting: this.adConfig.testing,
      autoShow: false
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        console.log('addmob prepared');
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here


          this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
  }

  displayInterstitial(){
    if(this.canDisplayInterstitial){
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: this.adConfig.interstitial,
        isTesting: this.adConfig.testing,
        autoShow: true
      }

      this.admobFree.interstitial.config(interstitialConfig);

      this.admobFree.interstitial.prepare().then(() =>
      {
      }).catch( e => console.log(e));

      this.startInterstitialTimer();
    }

  }

  startInterstitialTimer(){
    this.canDisplayInterstitial = false;
    setTimeout(function(){
      console.log('interstitial timer up');
      this.canDisplayInterstitial = true;
    }.bind(this), 120000);
  }
}
