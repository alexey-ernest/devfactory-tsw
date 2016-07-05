import {Component, OnInit} from '@angular/core';

import {Help} from './help';
import {HELP_CONTENTS} from './data';
import {WaypointDirective} from '../shared';
import {LightboxDirective} from '../shared';

const PORTAL_URL = 'http://ts-portal.devfactory.com';

@Component({
  selector: 'tsw-help',
  template: require('./help.component.html'),
  styles: [require('./help.component.css')],
  directives: [
    WaypointDirective,
    LightboxDirective
  ]
})
export class HelpComponent implements OnInit {
  help: Help[] = [];

  ngOnInit() {
    // filter mocks
    this.help = this.help.filter(f => {
      return f.pages.filter(p => {
        return !p.screenshot.startsWith('http');
      }).length > 0;
    });

    // process screenshot urls
    this.help.forEach(h => {
      h.pages.forEach(p => {
        p.screenshot = PORTAL_URL + p.screenshot;
      });
    });
  }
}
