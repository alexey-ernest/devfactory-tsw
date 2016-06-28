import {Component, OnInit} from '@angular/core';

import {WaypointDirective} from '../shared';
import {News} from './news';

@Component({
  selector: 'tsw-news',
  template: require('./news.component.html'),
  styles: [require('./news.component.css')],
  directives: [
    WaypointDirective
  ]
})
export class NewsComponent implements OnInit {
  news: News[] = [{
    title: "Searching faster",
    text: "Automation engines like Testcomplete use the tree model to represent a application component structure. Searching for objects in complex object tree takes too long and even tough objects are mostly cached , a normal process tree can contain several thousands of components in intricate hierarchy trees and each component have several properties to match according to required queries.",
    date: new Date()
  },
  {
    title: "Test life cycle",
    text: "Here at DevFactory we execute more than hundreds of thousands of automated functional tests every week.Each product has suites of more than thousand test cases which are run at least every day.One can imagine the quantity and variety of issues we face while maintaining these tests.This compels us to continuously search for automation opportunities and better artifacts for managing the process.Test Life cycle is one such artifact that helps us analyze flaky and noisy test cases.",
    date: new Date()
  },
  {
    title: "Searching faster",
    text: "Automation engines like Testcomplete use the tree model to represent a application component structure. Searching for objects in complex object tree takes too long and even tough objects are mostly cached , a normal process tree can contain several thousands of components in intricate hierarchy trees and each component have several properties to match according to required queries.",
    date: new Date()
  },
  {
    title: "Test life cycle",
    text: "Here at DevFactory we execute more than hundreds of thousands of automated functional tests every week.Each product has suites of more than thousand test cases which are run at least every day.One can imagine the quantity and variety of issues we face while maintaining these tests.This compels us to continuously search for automation opportunities and better artifacts for managing the process.Test Life cycle is one such artifact that helps us analyze flaky and noisy test cases.",
    date: new Date()
  }];

  rows: News[][] = [];

  ngOnInit() {
    this.buildRows();
  }

  buildRows() {
    let result: News[][] = [];
    let row: News[] = [];
    let itemsPerRow = 2;
    this.news.forEach(function (n, i) {
      row.push(n);
      if (i % itemsPerRow === (itemsPerRow - 1)) {
        result.push(row);
        row = [];
      }
    });

    this.rows = result;
  }
}
