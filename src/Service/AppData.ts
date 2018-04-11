

import { Injectable } from '@angular/core';
import {IProfile,IUser} from './Models';



@Injectable()
export class AppData {

    public appUIConfig:any;

    public profile:IProfile;
    
    public commonData:any;

    public login:any;

}