import {Component} from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

import {WaypointDirective} from '../shared';

@Component({
  selector: 'tsw-features',
  template: require('./features.component.html'),
  styles: [require('./features.component.css')],
  providers: [MdIconRegistry],
  directives: [
    MD_ICON_DIRECTIVES,
    WaypointDirective
  ]
})
export class FeaturesComponent {
  features: any[] = [
    { icon: 'important_devices', title: 'Crossbrowser Testing', description: 'Chrome, Safari, Firefox, IE, Edge' },
    { icon: 'widgets', title: 'Docker 15 min Tooling', description: 'If you already have a docker image - its awesome, we can configure the tests even faster' },
    { icon: 'looks_one', title: 'Automated Maintenance', description: 'Auto-healing tests and 1-click fixes make your life easier' }
  ];
}
