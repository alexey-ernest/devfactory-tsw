import {Component, OnInit} from '@angular/core';
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
export class FeaturesComponent implements OnInit {
  features: Feature[] = FEATURES;
  rows: Feature[][] = [];

  ngOnInit() {
    this.buildRows();
  }

  buildRows() {
    let result: Feature[][] = [];
    let row: Feature[] = [];
    let itemsPerRow = 3;
    let length = this.features.length;
    this.features.forEach(function (f, i) {
      row.push(f);
      if (i % itemsPerRow === (itemsPerRow - 1) || i === length - 1) {
        result.push(row);
        row = [];
      }
    });

    this.rows = result;
  }
}
