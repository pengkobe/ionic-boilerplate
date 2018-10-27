import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { TestPage } from '../test/test';
import { EmitService } from '@providers/emit.service';
import { GlobalService } from '@providers/global.service';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = TestPage;
  constructor(
    public translate: TranslateService,
    public emit: EmitService,
    public globalservice: GlobalService
  ) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
    if (this.globalservice.languageType) {
      translate.use(this.globalservice.languageType);
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
    }

    this.emit.eventEmit.subscribe(val => {
      if (val == 'languageType') {
        translate.use(this.globalservice.languageType);
      }
    });
  }
}
