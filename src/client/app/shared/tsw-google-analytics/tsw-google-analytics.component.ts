import {Component, Input, OnInit} from 'angular2/core';

import {environment} from '../../environment';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-google-analytics',
  templateUrl: 'tsw-google-analytics.component.html'
})
export class TswGoogleAnalyticsComponent implements OnInit {
  ngOnInit () {
    let ga = window['ga'];
    if (!ga) {
      return;
    }
    
    ga('create', environment.ga, 'auto');
    ga('send', 'pageview');
  }
}