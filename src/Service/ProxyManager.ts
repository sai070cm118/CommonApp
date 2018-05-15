import { Injectable } from '@angular/core';
import { AppConfig } from '../Utilities/AppConfig';
import { AppData } from './AppData';

import { HttpClient } from '@angular/common/http';
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
            this._http.post<any>(this._appConfig.LoginURI, this._appData.login)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });

    }
    

    register(){
        return new Promise((resolve, reject) => {
            this._http.post<any>(this._appConfig.RegisterURI, this._appData.login)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });
    }
    

    refreshToken(){
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.RefreshTokenURI, {headers:{'RefreshToken':this._appConfig.getRefreshToken()}})
              .subscribe(res => {

                console.log(res);
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    logout(){
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.LogoutURI, {headers:{'RefreshToken':this._appConfig.getRefreshToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }
    
    reSendVerificationEmail(){
        console.log(this._appConfig.getSessionToken());
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.ResendVerificationEmailURI, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    verifyEmail(){
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.VerifyEmailURI+this._appData.profile.EmailVerification, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    resendVerificationOTP(){
        console.log(this._appConfig);
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.ResendVerificationOTPURI, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    verifyMobile(){
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.VerifyMobileURI+this._appData.profile.MobileVerification, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    forgotPassword(){
        return new Promise((resolve, reject) => {
            this._http.get<any>(this._appConfig.ForgotPasswordURI+this._appData.login.User.Email, {headers:{}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    recoverPassword(){
        return new Promise((resolve, reject) => {
            this._http.post<any>(this._appConfig.RecoverPasswordURI,this._appData.login.User, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
    getMyProfile(){
      return new Promise((resolve, reject) => {
          this._http.get<any>(this._appConfig.MyProfileURI, {headers:{'SessionToken':this._appConfig.getSessionToken()}})
            .subscribe(res => {
              resolve(res);
            }, (err) => {
                console.log(err);
              reject(err);
            });
        });
    }
}