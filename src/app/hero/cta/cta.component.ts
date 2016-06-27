import {Component, OnInit} from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import * as moment from 'moment';

import {EmailService} from '../../services';

/**
 * Number of days to prepare a new product.
 */
const READY_DAYS: number = 4;

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
export class CtaComponent implements OnInit {
  loading: boolean;
  submitted: boolean;

  thisOrNextWeek: string;
  readyDay: string;

  constructor(private service: EmailService) {
  }

  ngOnInit() {
    let readyDate = moment().add(READY_DAYS, 'days');
    this.thisOrNextWeek = +moment().format('E') + READY_DAYS > 7 ? 'next' : 'this';
    this.readyDay = readyDate.format('dddd');
  }

  /**
   * @brief      Sends a demo request.
   *
   * @param      email  Requester email.
   * @param      name   Requester name.
   *
   */
  sendRequest(email: string, name: string) {
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
