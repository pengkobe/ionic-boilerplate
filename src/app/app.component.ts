import { Component, ViewChild } from '@angular/core';
import {
  App,
  Platform,
  IonicApp,
  Nav,
  ToastController,
  Events,
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalService } from '@providers/global.service';
import { UpdateService } from '@providers/update.service';
import { NativeService } from '@providers/native.service';

import { TranslateService } from '@ngx-translate/core';
import { EmitService } from '@providers/emit.service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { TabsPage } from './../pages/tabs/tabs';

declare var window;

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  backButtonPressed = false;
  hideNav = false;

  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public app: App,
    public platform: Platform,
    public events: Events,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public global: GlobalService,
    public native: NativeService,
    public updateService: UpdateService,
    public ionicApp: IonicApp,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    public globalservice: GlobalService,
    public emit: EmitService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Test', component: TestPage },
    ];

    this.initTranslate();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#f8f8f8');
      this.splashScreen.hide();
      if (window.cordova) {
        this.updateService.checkUpdate();
        this.native.initNativeService();
        this.registerBackButtonAction();
        this.native.initAppCenter();
      }
    });

    this.events.subscribe('qrScanner:show', () => {
      this.hideNav = true;
    });
    this.events.subscribe('qrScanner:hide', () => {
      this.hideNav = false;
    });
  }

  initTranslate() {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    if (this.globalservice.languageType) {
      this.translate.use(this.globalservice.languageType);
    } else {
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
    }

    this.emit.eventEmit.subscribe(val => {
      if (val === 'languageType') {
        this.translate.use(this.globalservice.languageType);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /**
   * 物理键返回事件
   */
  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      const activePortal =
        this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._loadingPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss().catch(() => {});
        activePortal.onDidDismiss(() => {});
        return;
      }
      const activeNav = this.app.getActiveNav();
      return activeNav.canGoBack() ? activeNav.pop() : this.showExit();
    }, 1);
  }

  /**
   * 确认是否关闭 App
   */
  showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.toastCtrl
        .create({
          message: '再按一次退出应用',
          duration: 2000,
          position: 'top',
        })
        .present();
      this.backButtonPressed = true;
      setTimeout(() => (this.backButtonPressed = false), 2000);
    }
  }
}
