import {Component, Input} from 'angular2/core';

import {TswLatestNewsItemComponent} from './tsw-latest-news-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-latest-news',
  templateUrl: 'tsw-latest-news.component.html',
  directives: [TswLatestNewsItemComponent]
})
export class TswLatestNewsComponent  {
  /**
   * Latest news section title.
   * 
   * type {string}
   */  
  @Input()
  title: string;
}