export interface ITranslate {
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
        if (val === 'languageType') {
          this.translate.use(this.globalservice.languageType);
        }
      });
    };

    if (ngOnInitUnpatched) return ngOnInitUnpatched.call(this);
  };
}
