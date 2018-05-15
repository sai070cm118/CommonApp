import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

//import {Globals} from '../../app/Globals';
//import {Device } from '@ionic-native/device';
import { AlertController } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';
//import { UserManagerProvider } from '../../providers/rest/UserManager';
import { Storage } from '@ionic/storage';

import { AppConfig } from '../../Utilities/AppConfig';
//import { WelcomePage } from '../welcome/welcome'
//import { GooglePlus } from '@ionic-native/google-plus';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { CallLog } from '@ionic-native/call-log';
//import { AndroidPermissions } from '@ionic-native/android-permissions';
import { TabsPage } from '../tabs/tabs';
import { ProxyManager } from '../../Service/ProxyManager';

import { AppData } from '../../Service/AppData'

//import { WelcomePage } from '../Welcome/Welcome';
declare var SMS:any;

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userProfile: any = null;
  signUpForm:number=1;

  currentVisibleForm:any=1;

  IsResetTokenSent:any=false;
 
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     private _storage: Storage,
     private callLog: CallLog,
     public platform:Platform,
     private _appConfig:AppConfig,
     private _proxyManager:ProxyManager,
      private _appData:AppData
    ) {

  }

  ngOnInit(){
    this.checkLoginStatus();
  }


  loginEvent(){
    let OPTIONSOBJECT = {
      animate:true,
      direction: "forward" // or "backward"
  }

    this._proxyManager.login()
    .then(resultData => {
          
      var data=resultData as any;

      if(!data.error){
        if(data.data.code==2)
          this.currentVisibleForm=4;
        else if(data.data.code==3)
          this.currentVisibleForm=5;
        else
        {
          this.navCtrl.setRoot(TabsPage,null,OPTIONSOBJECT);
        }
        this._appConfig.setToken(data.data.Token);
        this._appData.profile=data.data.data;
      }
    })
    .catch(err => console.error('Error: '+err));

  }


  registerEvent(){

    this._proxyManager.register()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      
      if(!data.error){
        this.currentVisibleForm=1;
      }
    })
    .catch(err => console.error('Error: '+err));

  }

  resendVerificationToken(){
    this._proxyManager.reSendVerificationEmail()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
    })
    .catch(err => console.error('Error: '+err));
  }

  verifyEmail(){

    
    this._proxyManager.verifyEmail()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      
      if(!data.error){
      this.currentVisibleForm=5;
      }
    })
    .catch(err => console.error('Error: '+err));

  }

  resendVerificationOtp(){
    this._proxyManager.resendVerificationOTP()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error('Error: '+err));
    
  }

  verifyMobile(){
    this._proxyManager.verifyMobile()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      if(!data.error){
        this.checkLoginStatus();
      }
    })
    .catch(err => console.error('Error: '+err));
  }

  recover(){
    
    this._proxyManager.forgotPassword()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      
      if(!data.error){
      this.currentVisibleForm=4;
      }
    })
    .catch(err => console.error('Error: '+err));

    this.IsResetTokenSent=true;
  }
  
  resend(){
    this._proxyManager.forgotPassword()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      
      if(!data.error){
      this.currentVisibleForm=4;
      }
    })
    .catch(err => console.error('Error: '+err));

  }

  reSet(){

    this._proxyManager.recoverPassword()
    .then(resultData => {
          
      var data=resultData as any;
      console.log(data);
      
      if(!data.error){
      this.currentVisibleForm=4;
      }
    })
    .catch(err => console.error('Error: '+err));
  }



  checkLoginStatus(){
    var thisObj=this;
    this._appConfig.getbackUserId(function(userId){
      if(userId!=undefined){

        thisObj._proxyManager.getMyProfile()
        .then(resultData => {
          
          var data=resultData as any;

          console.log(data);

          if(!data.error){
            if(data.data.Status==1)
              thisObj.currentVisibleForm=4;
            else if(data.data.Status==2)
              thisObj.currentVisibleForm=5;
            else
            {
              thisObj.navCtrl.setRoot(TabsPage);
            }
            thisObj._appData.profile=data.data;
          }
        })
        .catch(err => console.error(err));

      }
        

    });
  }
}
