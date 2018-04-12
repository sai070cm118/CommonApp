import { Injectable } from '@angular/core';
import { AppConfig } from '../Utilities/AppConfig';
import { AppData } from './AppData';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProxyManager {

    constructor(
        private _http: HttpClient,
        private _appConfig: AppConfig,
        private _appData: AppData,
    ) {

        }

    header = { "headers": {"Content-Type": "application/json"} };

    login(){

        return new Promise((resolve, reject) => {
            this._http.post(this._appConfig.LoginURI, this._appData.login)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });

    }
    

    register(){

    }
    

    refreshToken(){

    }

    
}