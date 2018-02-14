import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { Calendar } from '@ionic-native/calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { NgCalendarModule } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilitiesPage } from '../pages/utilities/utilities';
import { SettingPage } from '../pages/setting/setting';
import { LightPage } from '../pages/light/light';
import { FanPage } from '../pages/fan/fan';
import { DoorPage } from '../pages/door/door';
import { ProjectorPage } from '../pages/projector/projector';
import { TvPage } from '../pages/tv/tv';
import { Calendar2Page } from '../pages/calendar2/calendar2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    UtilitiesPage,
    LightPage,
    FanPage,
    DoorPage,
    ProjectorPage,
    TvPage,
    //CalendarPage,
    Calendar2Page
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    UtilitiesPage,
    LightPage,
    FanPage,
    DoorPage,
    ProjectorPage,
    TvPage,
    //CalendarPage
    Calendar2Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
