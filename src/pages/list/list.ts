import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EchartsPage } from './echarts/echarts';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [
      {
        title: 'echarts',
        note: '',
        icon: 'speedometer',
      },
      {
        title: '日历组件 ',
        note: '',
        icon: 'calendar',
      },
      {
        title: '通讯录组件 ',
        note: '',
        icon: 'contacts',
      },
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item,
    // });
    if (item.title === 'echarts') {
      this.navCtrl.push(EchartsPage, {
        item: item,
      });
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 600);
  }
}
