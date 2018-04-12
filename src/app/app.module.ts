import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule  } from '@angular/common/http';
import { ProxyManager } from '../Service/ProxyManager';

//App configuration
import { AppConfig } from '../Utilities/AppConfig'

//App Data Manager
import { SocketIoModule } from 'ng-socket-io';
import { IonicStorageModule } from '@ionic/storage';
import { SocketManager } from '../Service/SocketManager';
import { DataRouteManager } from '../Service/DataRouteManager';
import { ProfileController } from '../Service/RouteService/ProfileController';
import { AppData } from '../Service/AppData';
import { AppSocket } from '../Service/AppSocket';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppConfig,
    DataRouteManager,
    ProfileController,
    AppData,
    AppSocket,
    SocketManager,
    HTTP,
    HttpClientModule,
    ProxyManager,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
