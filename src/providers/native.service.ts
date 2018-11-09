/**
 * 常用原生服务
 *  - 网络状态
 *  - 件下载
 *  - 屏幕常亮
 */

import { Injectable } from '@angular/core';
import { Platform, ToastController, Toast } from 'ionic-angular';
import { GlobalService } from './global.service';
import { Insomnia } from '@ionic-native/insomnia';
import { Network } from '@ionic-native/network';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

declare var window;

@Injectable()
export class NativeService {
  headimgurl: String;
  toast: Toast;

  private isOffline = false;

  constructor(
    public platform: Platform,
    public globalservice: GlobalService,
    private insomnia: Insomnia,
    private toastCtrl: ToastController,
    private transfer: FileTransfer,
    private network: Network
  ) {}

  /**
   * 初始化
   */
  init() {}

  /**
   * 初始化 Native 服务
   */
  initNativeService() {
    this.listenInsomniaState();
    this.listenNetworkState();
  }

  /**
   * 监听屏幕显示状态
   */
  listenInsomniaState() {
    if (this.globalservice.isAlwaysLight) {
      this.insomnia
        .keepAwake()
        .then(
          () => console.log('insomnia init success'),
          e => console.log('insomnia init error', e)
        );
    }
  }

  /**
   * 监听网络状态
   */
  listenNetworkState() {
    this.createToast();
    const offlineOnlineThrottle = this.throttle(msg => {
      if (this.isOffline === true) {
        this.toast.setMessage(msg);
        this.toast.present();
      }
    }, 2400);
    this.network.onDisconnect().subscribe(() => {
      this.isOffline = true;
      console.log('network was disconnected :-(');
      offlineOnlineThrottle('网络已断开！');
    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.isOffline = false;
      this.toast.dismissAll();
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('got network:wifi!');
        }
      }, 3000);
    });
  }

  /**
   * 函数节流方法
   * @param Function fn 延时调用函数
   * @param Number delay 延迟多长时间
   * @return Function 延迟执行的方法
   */
  throttle(fn, delay) {
    let timer = null;
    return function(msg) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(msg);
      }, delay);
    };
  }

  /**
   * create toast
   * @param msg
   */
  createToast(msg = '') {
    this.toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: 'my-toast-style',
      showCloseButton: true,
      closeButtonText: 'Close',
      dismissOnPageChange: true,
    });
  }

  /**
   * file download
   * @param remotepath
   * @param targetPathWithFileName
   */
  filedownload(remotepath, targetPathWithFileName) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          Authorization: this.globalservice.token,
        },
      };
      const trustHosts = true;
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer
        .download(
          window.encodeURI(remotepath),
          targetPathWithFileName,
          trustHosts,
          options
        )
        .then(result => {
          resolve(result.toURL());
        })
        .catch(err => {
          reject(err);
        });
      fileTransfer.onProgress((evt: ProgressEvent) => {
        // show download progress
      });
    });
  }
}
