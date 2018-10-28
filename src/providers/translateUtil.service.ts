import { Injectable, OnInit, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '@providers/global.service';
import { EmitService } from '@providers/emit.service';

@Injectable()
export class TranslateUtilService implements OnInit {
  constructor(
    public translate: TranslateService,
    public globalservice: GlobalService,
    public emit: EmitService,
    private injector: Injector
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

  ngOnInit() {}
}
