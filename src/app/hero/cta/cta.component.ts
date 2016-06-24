import {Component} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {EmailService} from '../../services';

@Component({
  selector: 'tsw-cta',
  template: require('./cta.component.html'),
  styles: [
    require('./cta.component.css'),
    require('../../button.css'),
    require('../../input.css')
  ],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ]
})
export class CtaComponent {
  loading: boolean;
  submitted: boolean;

  constructor(private service: EmailService) {
  }

  /**
   * @brief      Sends a demo request.
   *
   * @param      email  Requester email.
   * @param      name   Requester name.
   *
   */
  sendRequest(email:string, name:string) {
    if (this.submitted) {
      return;
    }

    this.loading = true;
    this.service.sendDemoRequest(email, name).subscribe(
      () => {
        this.loading = false;
        this.submitted = true;
      });
  }
}
