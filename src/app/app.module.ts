import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/Storage';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarModule } from 'ion2-calendar';
import { RebirthStorageModule } from 'rebirth-storage';
import { RebirthHttpModule } from 'rebirth-http';
import { NgxEchartsModule } from 'ngx-echarts';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

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
    RebirthStorageModule,
    RebirthHttpModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // { provide: ErrorHandler, useClass: SentryIonicErrorHandler }
  ],
})
export class AppModule {}
