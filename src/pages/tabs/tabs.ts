import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { TestPage } from '../test/test';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '@providers/global.service';
import { EmitService } from '@providers/emit.service';

interface ITranslate {
  ngOnInit?: Function;
  ngOnDestroy?: Function;
  emit: any;
  translate: any;
  globalservice: any;
}

export function TranslateMethodDecorator() {
  return (classProto: ITranslate, prop, decorator) => {
    const ngOnInitUnpatched = classProto.ngOnInit;
    classProto.ngOnInit = function(this: ITranslate) {
      this.translate.addLangs(['en', 'zh']);
      this.translate.setDefaultLang('en');
      if (this.globalservice.languageType) {
        this.translate.use(this.globalservice.languageType);
      } else {
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');
      }

      this.emit.eventEmit.subscribe(val => {
        debugger;
        if (val == 'languageType') {
          this.translate.use(this.globalservice.languageType);
        }
      });
    };

    if (ngOnInitUnpatched) return ngOnInitUnpatched.call(this);
  };
}

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = TestPage;
  constructor(
    public translate: TranslateService,
    public globalservice: GlobalService,
    public emit: EmitService
  ) {
    this.initTranslate();
  }

  ngOnInit() {}

  @TranslateMethodDecorator()
  initTranslate() {}
}
