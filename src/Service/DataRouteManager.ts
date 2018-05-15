import { Injectable } from '@angular/core';
import { ProfileController } from './RouteService/ProfileController';
import { ToastController } from 'ionic-angular';

@Injectable()
export class DataRouteManager {


    constructor(
        private _profileController:ProfileController,
        private _toastCtrl: ToastController
    ){
    }


    RouteController(input:any) {
        if(input.Type=='Response'){
            let toast = this._toastCtrl.create({
                message: input.data.message,
                duration: 2500,
                position: 'top'
            });

            toast.present();

            switch(input.data.Model){
                case 'default':console.log('Default');
                break
            }
        }
        else if(input.error){
            let toast = this._toastCtrl.create({
                message: input.data.message,
                duration: 2500,
                position: 'top'
              });
              toast.present();
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