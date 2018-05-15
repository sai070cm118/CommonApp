import {Component, Input, Output, EventEmitter, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';


import { AppData } from '../../Service/AppData';

/**
 * Generated class for the LeftMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'left-menu',
  templateUrl: 'left-menu.html'
})
export class LeftMenuComponent {

  @Input() treeItems:any;
  @Output() updaateContent=new EventEmitter();

  constructor(
      private _Globals: AppData
  ) {
  }

  togglesideOnlineStatus($event:any){
      
  }

  updaateContents($index:any){
      this.updaateContent.emit($index);
  }

}
