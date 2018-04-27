import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EmailComposer,
    File,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
