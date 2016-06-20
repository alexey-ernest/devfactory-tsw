import {Component} from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

import {BenefitsComponent} from './benefits';
import {CtaComponent} from './cta';
import {ScreensComponent} from './screens';

@Component({
  selector: 'tsw-hero',
  template: require('./hero.component.html'),
  styles: [
    require('./hero.component.css'),
    require('../toolbar.css')
  ],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    BenefitsComponent,
    CtaComponent,
    ScreensComponent
  ]
})
export class HeroComponent {
}
