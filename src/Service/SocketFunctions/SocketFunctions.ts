import { Injectable } from '@angular/core';
import { SocketManager } from '../../Service/SocketManager';
import { AppData } from '../AppData';
import { IProfile } from '../Models';


@Injectable()
export class SocketFunctions {

    constructor(
        private _appData:AppData,
        private _socketManager:SocketManager
    ){
    }

    /*
    functionName(){
        this._socketManager.send({
            'controller':'ControllerName',
            'method':'MethodName',
            'data':{}
        });
    }
    */

}