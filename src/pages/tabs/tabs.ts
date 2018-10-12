import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = TestPage;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
  }
}
