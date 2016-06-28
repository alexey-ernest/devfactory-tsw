import {Component, OnInit} from '@angular/core';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';

import {WaypointDirective} from '../shared';
import {News} from './news';
import {NewsService} from '../services';

@Component({
  selector: 'tsw-news',
  template: require('./news.component.html'),
  styles: [
    require('./news.component.css'),
    require('../progress-circle.css')
  ],
  directives: [
    WaypointDirective,
    MD_PROGRESS_CIRCLE_DIRECTIVES
  ]
})
export class NewsComponent implements OnInit {
  loading: boolean;
  news: News[] = [];
  rows: News[][] = [];

  constructor(private service: NewsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.service.get().subscribe(
      (news) => {
        console.log(news);
      },
      (err) => {
        console.log('Could not load news feed: ', err);
      },
      () => {
        this.loading = false;
      }
    );
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
