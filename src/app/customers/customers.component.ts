import {Component} from '@angular/core';

import {WaypointDirective} from '../shared';

@Component({
  selector: 'tsw-customers',
  template: require('./customers.component.html'),
  styles: [require('./customers.component.css')],
  directives: [
    WaypointDirective
  ]
})
export class CustomersComponent {
  customers: any[] = [
    { image: '../../../public/images/aurea.png', title: 'Aurea' },
    { image: '../../../public/images/crossover.png', title: 'Crossover' },
    { image: '../../../public/images/gensym.png', title: 'Gensym' },
    { image: '../../../public/images/ignite.png', title: 'Ignite' },
    { image: '../../../public/images/tenrox.png', title: 'Tenrox' },
    { image: '../../../public/images/versata.png', title: 'Versata' }
  ];
}
