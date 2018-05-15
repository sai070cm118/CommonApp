
import {Component,Input, Output, EventEmitter} from '@angular/core';

import { AppData } from '../../Service/AppData';

/**
 * Generated class for the PopOverMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  host: {
    '(document:click)': 'handleClick($event)',
  },
  selector: 'pop-over-menu',
  templateUrl: 'pop-over-menu.html'
})
export class PopOverMenuComponent {

  @Input() propOverDropdowns:any;
  @Output() viewProfile=new EventEmitter();
  

  constructor(
    private _Globals: AppData
){ 

}

expandedPopover=-1;

popoverClicked($event:any,$value:any){
    console.log($value);
    this.expandedPopover=$value;
    $event.stopPropagation();
}

signOut($event:any){

    localStorage.removeItem('currentUser');
    this._Globals.profile=null;
}

profileView($event:any){
    setTimeout(function() {
        this.expandedPopover=-1;
        console.log(this.expandedPopover);
    }, 1000);
    this.viewProfile.emit(2);
}


handleClick($event:any){
    this.expandedPopover=-1;
}

}
