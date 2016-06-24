import {Component} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

import {EmailService} from '../services';

@Component({
  selector: 'tsw-closing-statement',
  template: require('./closing-statement.component.html'),
  styles: [
    require('./closing-statement.component.css'),
    require('../button.css')
  ],
  directives: [
    MD_BUTTON_DIRECTIVES
  ]
})
export class ClosingStatementComponent {
  submitted:boolean;

  constructor(service: EmailService) {
    service.requestSent$.subscribe(() => this.submitted = true);
  }
}
