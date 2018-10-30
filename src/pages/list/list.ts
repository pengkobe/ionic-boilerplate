import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EchartsPage } from './echarts/echarts';
import { CalendarPage } from './calendar/calendar';

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
        title: 'calendar',
        note: '',
        icon: 'calendar',
      },
    ];
  }

  itemTapped(event, item) {
    if (item.title === 'echarts') {
      this.navCtrl.push(EchartsPage, {
        item: item,
      });
    }
    if (item.title === 'calendar') {
      this.navCtrl.push(CalendarPage, {
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
