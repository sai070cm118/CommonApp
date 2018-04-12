import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketManager } from '../../Service/SocketManager';
import { AppConfig } from '../../Utilities/AppConfig';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private _appConfig:AppConfig,
    private _socketManager:SocketManager) {
      this._appConfig.getbackUserId(function(userId){
        if(userId==undefined)
          navCtrl.setRoot(LoginPage);
      });

  }
  logoutEvent(){
    this._appConfig.removeToken();
    this.navCtrl.setRoot(LoginPage);
  }
}
