

import { Injectable } from '@angular/core';
import {IProfile} from './Models';



@Injectable()
export class AppData {

    public appUIConfig:any;

    public profile:IProfile;
    
    public commonData:any;

    public login:any={
        "User":{
            "Email":"sai@gmail.com",
            "Password":"sairam0168"
        }
    };

    public token:any;

}