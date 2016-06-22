import {Component, OnInit} from '@angular/core';

import {environment} from '../../environment';

@Component({
  selector: 'tsw-google-analytics',
  template: require('./google-analytics.component.html'),
})
export class GoogleAnalyticsComponent implements OnInit {
  ngOnInit () {
    let ga = window['ga'];
    if (!ga) {
      return;
    }

    console.log(environment);
    ga('create', environment.ga, 'auto');
    ga('send', 'pageview');
  }
}
