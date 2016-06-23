import {Component} from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

@Component({
  selector: 'tsw-benefits',
  template: require('./benefits.component.html'),
  styles: [require('./benefits.component.css')],
  providers: [MdIconRegistry],
  directives: [
    MD_ICON_DIRECTIVES
  ]
})
export class BenefitsComponent {
  benefits: string[] = [
    'Full functional tests in 3 days',
    'Web, mobile, desktop and CLI',
    'CI/CD friendly',
    'Easy maintenace'
  ];
}
