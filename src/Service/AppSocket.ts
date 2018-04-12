
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { AppConfig } from '../Utilities/AppConfig';


@Injectable()
export class AppSocket extends Socket {
  constructor(private _appConfig:AppConfig){
    super(
      { 
        url: _appConfig.AppSocketConnectionURI, 
        options: {
          query: {
            Token:_appConfig.getSessionToken() 
          }
        } 
      });
  }
}