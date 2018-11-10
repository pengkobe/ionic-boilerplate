import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '@providers/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cahceData = '';
  constructor(public navCtrl: NavController, public dataservice: DataService) {}

  testCache() {
    this.dataservice.testCachedData().subscribe(x => {
      this.cahceData = x;
    });
  }
}
