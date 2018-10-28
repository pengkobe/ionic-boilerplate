import { Injectable, EventEmitter, OnInit } from '@angular/core';

/*
  Generated class for the EmitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmitService implements OnInit {
  public eventEmit: EventEmitter<any>;

  constructor() {
    console.log('Hello EmitService Provider');
    this.eventEmit = new EventEmitter();
  }

  ngOnInit() {}
}
