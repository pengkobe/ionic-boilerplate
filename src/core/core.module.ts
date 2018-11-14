/**
 * 统一管理系统中通用服务
 */

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { Insomnia } from '@ionic-native/insomnia';
import { Network } from '@ionic-native/network';
import { BackgroundMode } from '@ionic-native/background-mode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppCenterAnalytics } from '@ionic-native/app-center-analytics';
import { AppCenterCrashes } from '@ionic-native/app-center-crashes';

import { GlobalService } from '@providers/global.service';
import { QiniuUploadService } from '@providers/qiniu.upload.service';
import { UpdateService } from '@providers/update.service';
import { NativeService } from '@providers/native.service';
import { DataService } from '@providers/data.service';
import { BaiduLocationService } from '@providers/baidulocation.service';
import { EmitService } from '@providers/emit.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
    File,
    FileTransfer,
    FileOpener,
    Insomnia,
    Network,
    AppCenterAnalytics,
    AppCenterCrashes,

    NativeService,
    UpdateService,
    GlobalService,
    QiniuUploadService,
    DataService,
    BaiduLocationService,
    EmitService,
  ],
})
export class CoreModule {}
