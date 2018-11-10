import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/Storage';

import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { Insomnia } from '@ionic-native/insomnia';
import { Network } from '@ionic-native/network';
import { BackgroundMode } from '@ionic-native/background-mode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxEchartsModule } from 'ngx-echarts';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarModule } from "ion2-calendar";
import { RebirthStorageModule } from 'rebirth-storage';
import { RebirthHttpModule } from 'rebirth-http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { TabsPage } from '../pages/tabs/tabs';

import { EchartsPage } from '../pages/list/echarts/echarts';
import { CalendarPage } from '../pages/list/calendar/calendar';

import { SentryIonicErrorHandler } from './sentry-error-handler.';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    TabsPage,
    EchartsPage,
    CalendarPage,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    NgxEchartsModule,
    CalendarModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    TabsPage,
    EchartsPage,
    CalendarPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
    File,
    FileTransfer,
    FileOpener,
    Insomnia,
    Network,
    RebirthStorageModule,
    RebirthHttpModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // { provide: ErrorHandler, useClass: SentryIonicErrorHandler }
  ],
})
export class AppModule {}
