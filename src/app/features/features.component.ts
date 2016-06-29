import {Component} from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

import {Feature} from './feature';
import {FEATURES} from './features';
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
  features: Feature[] = FEATURES;
}
