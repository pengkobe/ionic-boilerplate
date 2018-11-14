import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, IonicApp,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalService } from '../providers/global.service';
import { UpdateService } from '../providers/update.service';
import { NativeService } from '../providers/native.service';
import { HttpClientModule } from '@angular/common/http';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavMock,
} from '../../test-config/mocks-ionic';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

class IonicAppMock { }

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        CoreModule,
        SharedModule,
      ],
      providers: [
        GlobalService,
        UpdateService,
        NativeService,
        { provide: IonicApp, useClass: IonicAppMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: Nav, useClass: NavMock },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('should rootPage equals to HomePage', () => {
    expect(component.rootPage).toBe(TabsPage);
  });
});
