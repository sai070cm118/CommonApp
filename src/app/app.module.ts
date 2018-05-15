import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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
import { SocketFunctions } from '../Service/SocketFunctions/SocketFunctions';


import { ProfileController } from '../Service/RouteService/ProfileController';


import { AppData } from '../Service/AppData';
import { AppSocket } from '../Service/AppSocket';
import {Device } from '@ionic-native/device';
import { Sim } from '@ionic-native/sim';
import { CallNumber } from '@ionic-native/call-number';
import { CallLog } from '@ionic-native/call-log';
import { WelcomePage } from '../pages/welcome/welcome';
import { Contacts } from '@ionic-native/contacts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Calendar } from '@ionic-native/calendar';
import { DatePicker } from '@ionic-native/date-picker';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
import { Crop } from '@ionic-native/crop';
import { File } from '@ionic-native/file';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { GlobalMethods } from '../Service/GlobalMethods';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';

import { CustomHeaderComponent } from '../components/custom-header/custom-header';
import { WidgetComponent } from '../components/widget/widget';
import { MediumListComponent } from '../components/medium-list/medium-list';
import { SimpleListComponent } from '../components/simple-list/simple-list';
import { PopOverMenuComponent } from '../components/pop-over-menu/pop-over-menu';
import { LeftMenuComponent } from '../components/left-menu/left-menu';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    WelcomePage,
    CustomHeaderComponent,
    WidgetComponent,
    MediumListComponent,
    SimpleListComponent,
    PopOverMenuComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule,
    IonicStorageModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    AngularMultiSelectModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    WelcomePage
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
    SocketFunctions,
    HTTP,
    HttpClientModule,
    ProxyManager,
    Device,
    Sim,
    CallNumber,
    CallLog,
    Contacts,
    ImagePicker,
    Camera,
    Calendar,
    DatePicker,
    ImageResizer,
    Crop,
    File,
    PhotoViewer,
    GlobalMethods,
    Network,
    ToastController,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
