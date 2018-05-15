import {Component, Input, Output,EventEmitter} from '@angular/core';


/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  host: {
    'body:class': 'isMenuExpanded',
  },
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

  @Input() proverItems:any;
  @Input() profileInfo:any;
  @Output() togglesideMenu=new EventEmitter();
  @Output() viewProfile=new EventEmitter();
  isMenuExpanded=false;


  constructor() {
  }
  
  toggleMenu(){
      console.log('comming');
      this.isMenuExpanded=!this.isMenuExpanded;
      this.togglesideMenu.emit({isMenuExpanded:this.isMenuExpanded});
  }

  viewProfiles($index:any){
      this.viewProfile.emit($index);
  }

}
