import { Injectable } from '@angular/core';
import {DataRouteManager} from './DataRouteManager';
import { AppSocket } from './AppSocket';



@Injectable()
export class SocketManager {
  

  constructor(private socket: AppSocket,private dataRouteManager:DataRouteManager){
    this.socket.connect();
    this.initializeData();

  }

  initializeData(){
    this.socket.on('StoC',(message) => {
      this.dataRouteManager.RouteController(message);
    });
  }

  send(message){
    
    this.socket.emit('CtoS',message);
  }

}