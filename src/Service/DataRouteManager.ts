import { Injectable } from '@angular/core';
import { ProfileController } from './RouteService/ProfileController';


@Injectable()
export class DataRouteManager {


    constructor(
        private _profileController:ProfileController){
    }


    RouteController(input:any) {


        if(input.error){
            console.log(input.error);
        }
        else{

            switch(input.Type){
                case 'MyProfile':
                    this._profileController.setProfile(input.data);
                break;
                case 'default':console.log('Default');
                break
            }

        }

    }

}