import { Injectable } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ModalController, NavController } from 'ionic-angular';

@Injectable()
export class GlobalMethods {
  model: any;


  constructor(
    private photoViewer: PhotoViewer,
    public modalctrl:ModalController,
    ){
    
  }

  ImageViewer(url){
    this.photoViewer.show("./assets/Content/img/avatar3.png");
  }
  modleshow(page){
    this.model = this.modalctrl.create(page,null);
    this.model.present();
    
    
  }
  modlehide(){
      
    this.model.dismiss();
   
  }
}