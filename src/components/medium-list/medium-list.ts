import {Component, Input} from '@angular/core';

/**
 * Generated class for the MediumListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'medium-list',
  templateUrl: 'medium-list.html'
})
export class MediumListComponent {

  @Input() listItems:any[];

  constructor() {
  }

}
