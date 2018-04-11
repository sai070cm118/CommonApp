import { Injectable } from '@angular/core';
import { AppData } from '../AppData';



@Injectable()
export class ProfileController {

    constructor(private _appData:AppData){

    }

    setProfile(profile:any){
        this._appData.profile=profile;
    }
}