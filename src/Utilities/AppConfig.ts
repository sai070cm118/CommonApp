import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()
export class AppConfig{

    private static _storage: Storage;

    constructor(_storage: Storage){

    }

    //Static Properties
    public static AppSocketConnectionURI:any='https://chitipata.herokuapp.com/AsUser';



    //Static Methods
    static getSessionToken(){

        this._storage.get('Token').then((val) => {
            return JSON.parse(val).SessionToken;
        });
        
    }

    static getRefreshToken(){

        this._storage.get('Token').then((val) => {
            return JSON.parse(val).RefreshToken;
        });
        
    }

    static getUserId(){

        this._storage.get('Token').then((val) => {
            return JSON.parse(val).UserId;
        });
        
    }

    static setToken(tokenObj:any){
        this._storage.set('Token',JSON.stringify(tokenObj));
    }
    
    static removeToken(tokenObj:any){
        this._storage.remove('Token');
    }
    
}