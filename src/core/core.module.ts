/**
 * 统一管理系统中通用服务
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GlobalService } from '@providers/global.service';
import { QiniuUploadService } from '@providers/qiniu.upload.service';
import { UpdateService } from '@providers/update.service';
import { NativeService } from '@providers/native.service';
import { DataService } from '@providers/data.service';
import { BaiduLocationService } from '@providers/baidulocation.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    NativeService,
    UpdateService,
    GlobalService,
    QiniuUploadService,
    DataService,
    BaiduLocationService,
  ],
})
export class CoreModule {}
