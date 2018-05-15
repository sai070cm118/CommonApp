

import { Injectable } from '@angular/core';
import {IProfile} from './Models';



@Injectable()
export class AppData {

    public appUIConfig:any;

    public profile:IProfile;
    
    public commonData:any;

    public login:any={
        "User":{
            "Email":"sai070cm118@gmail.com",
            "Mobile":"9553923920",
            "Password":"sairam0168"
        },
        "ProfileName":"MyName"
    };

    public token:any;


}