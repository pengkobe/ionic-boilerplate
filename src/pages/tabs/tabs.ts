import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { TestPage } from '../test/test';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '@providers/global.service';
import { EmitService } from '@providers/emit.service';
import { TranslateMethodDecorator, ITranslate } from '@providers/translateUtil.service';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit, ITranslate {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = TestPage;
  constructor(
    public translate: TranslateService,
    public globalservice: GlobalService,
    public emit: EmitService
  ) {}

  @TranslateMethodDecorator()
  ngOnInit() {}
}
