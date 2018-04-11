import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import {DataRouteManager} from './DataRouteManager';



@Injectable()
export class SocketManager {
  
  public static appI:any ='Teat';

  constructor(private socket: Socket,private dataRouteManager:DataRouteManager){
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