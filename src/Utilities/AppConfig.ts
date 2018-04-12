import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppData } from '../Service/AppData';

@Injectable()
export class AppConfig{

    public AppSocketConnectionURI:any='http://localhost:3004/AsUser';
    public LoginURI:any='https://commonusermanager.herokuapp.com/api/user/login';

    constructor(private _storage : Storage,private _appData:AppData){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                this._appData.token=undefined;
            else
                this._appData.token= JSON.parse(val);
        });
    }
    getSessionToken(){      
        return this._appData.token == null ? undefined : this._appData.token.SessionToken;
    }
    getbackSessionToken(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).SessionToken);
        });
    }
    getRefreshToken(){
        return this._appData.token == null ? undefined :this._appData.token.RefreshToken;
    }
    getbackRefreshToken(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).RefreshToken);
        });
    }
    getUserId(){
        return this._appData.token == null ? undefined :this._appData.token.UserId;
    }
    getbackUserId(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).UserId);
        });
    }
    setToken(tokenObj:any){
        this._storage.set('Token',JSON.stringify(tokenObj));
        this._appData.token=tokenObj;
    }
    removeToken(){
        this._storage.remove('Token');
        this._appData.token=undefined;
    }
}