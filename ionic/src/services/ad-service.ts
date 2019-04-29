import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig, AdMobFreeRewardVideo} from "@ionic-native/admob-free";
import { CurrentDataService } from "./current-data.service";
import { AlertController } from "ionic-angular";

@Injectable()
export class AdService {

  canDisplayInterstitial: boolean = false;
  interstitialReady: boolean = false;
  adConfig: any;
  showAds: boolean = true;
  testing: boolean = true;

  testingConfig: any = {
    banner: 'ca-app-pub-3940256099942544/6300978111',
    interstitial: 'ca-app-pub-3940256099942544/1033173712',
    reward: 'ca-app-pub-3940256099942544/5224354917',
    testing: true,
    interstitialTimeout: (10 * 1000)
  };

  liveConfig: any = {
    banner: 'ca-app-pub-4032953517610324/4093986742',
    interstitial: 'ca-app-pub-4032953517610324/8955240573',
    reward: 'ca-app-pub-4032953517610324/2245852521',
    testing: false,
    interstitialTimeout: (300 * 1000)
  }

  constructor( private admobFree: AdMobFree,
               private cds: CurrentDataService,
               private alertCtrl: AlertController) {
    if (this.testing) {
      this.adConfig = this.testingConfig;
    } else {
      this.adConfig = this.liveConfig;
    }
  }

  start(){
    this.cds.logToTranslationlist("starting AdService");

    // this.setupReward();
    this.setupBanner();
    // this.displayRewardAlert();
    // this.setupInterstitial();
  }

  setupBanner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: this.adConfig.banner,
      isTesting: this.adConfig.testing,
      autoShow: false
    };

    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      this.cds.logToTranslationlist('Showing banner');
      this.admobFree.banner.show();
    });

    //this.displayBanner();
  }

  setupReward(){
    this.cds.logToTranslationlist('setupReward');
    this.admobFree.rewardVideo.config({
      id: this.adConfig.reward,
      isTesting: this.adConfig.testing,
      autoShow: true
   });

  }

  setupInterstitial(){
    this.cds.logToTranslationlist('setupInterstitial');
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

  displayBanner(){
    this.admobFree.banner.prepare()
      .then(() => {
        this.cds.logToTranslationlist('banner ready');
        this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
  }

  displayReward() {
    this.cds.logToTranslationlist('displayReward');

    this.admobFree.rewardVideo.prepare().then((e) => {
      this.admobFree.rewardVideo.show().then((e) => {
        this.admobFree.on(this.admobFree.events.REWARD_VIDEO_REWARD).subscribe(() => {
          this.stopAds();
        });
        this.admobFree.on(this.admobFree.events.REWARD_VIDEO_LOAD_FAIL).subscribe( () => {
          this.stopAds();
        });
      })
    });
  }

  stopAds() {
    this.cds.logToTranslationlist('stopAds');
    this.showAds = false;
    this.admobFree.banner.hide();
  }

  displayRewardAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ad Free?',
      message: 'Do you want to enjoy Complete Translator ad free after watching a short video?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {this.displayReward();}
        },
        {
          text: 'No',
          handler: () => {}
        }
      ]

    });

    alert.present();
  }

  startInterstitialTimer(){
    this.canDisplayInterstitial = false;

    setTimeout(function(){
      this.canDisplayInterstitial = true;
    }.bind(this), this.adConfig.interstitialTimeout);
  }

  testAlert(){
    let alert = this.alertCtrl.create({
      title: 'Test Alert',
      subTitle: 'TEST',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
