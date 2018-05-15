import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { Storage } from '@ionic/storage';
import { SocketManager } from '../../Service/SocketManager';
import { AppConfig } from '../../Utilities/AppConfig';
import {SocketFunctions} from '../../Service/SocketFunctions/SocketFunctions';



import { AppData } from '../../Service/AppData';
import { IProfile } from '../../Service/Models';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _storage: Storage,
    private _appConfig:AppConfig,
    private _appData:AppData,
    private _socketFunctions:SocketFunctions,

  ) {
  }

  
  ngOnInit(){
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }



}

