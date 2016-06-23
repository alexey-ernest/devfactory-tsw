import {Component} from '@angular/core';

import {WaypointDirective} from '../shared';
import {Customer} from './customer';
import {CUSTOMERS} from './customers';

@Component({
  selector: 'tsw-customers',
  template: require('./customers.component.html'),
  styles: [require('./customers.component.css')],
  directives: [
    WaypointDirective
  ]
})
export class CustomersComponent {
  customers: Customer[] = CUSTOMERS;
}
