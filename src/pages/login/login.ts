import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , App} from 'ionic-angular';
import { AppConfig } from '../../Utilities/AppConfig';
import { HomePage } from '../home/home';
import { ProxyManager } from '../../Service/ProxyManager';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _appConfig:AppConfig,
    public appCtrl: App,
    private _proxyManager:ProxyManager
  ) {
    this._appConfig.getbackUserId(function(userId){
      if(userId!=undefined)
        navCtrl.setRoot(HomePage);

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginEvent(){

    this._proxyManager.login()
    .then(data => {
      this._appConfig.setToken(data);
      this.navCtrl.setRoot(HomePage);
    })
    .catch(err => console.error('Error: '+err));

  }

}
