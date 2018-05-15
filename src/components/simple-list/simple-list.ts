import {Component, Input} from '@angular/core';

/**
 * Generated class for the SimpleListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'simple-list',
  templateUrl: 'simple-list.html'
})
export class SimpleListComponent {

  @Input() listItems:any[];

  constructor() {
  }

}
