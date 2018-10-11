import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import lodash from 'lodash';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  @Output()
  successScaned: EventEmitter<any> = new EventEmitter();
  @Output()
  wrongScaned: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  open(format: boolean = false) {
    const modal = this.modalCtrl.create('QRScannerModal');

    modal.onDidDismiss(qrCode => {
      if (lodash.isNil(qrCode)) {
        return this.wrongScaned.emit();
      }
      const response = qrCode;
      return this.successScaned.emit(response);
    });

    modal.present();
  }

  private formatScheme(qrCode: any) {
    if (lodash.isObject(qrCode)) {
      return qrCode;
    } else {
      this.wrongScaned.emit();
    }
  }
}
