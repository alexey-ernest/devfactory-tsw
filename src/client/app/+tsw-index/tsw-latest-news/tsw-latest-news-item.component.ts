import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-latest-news-item',
  templateUrl: 'tsw-latest-news-item.component.html'
})
export class TswLatestNewsItemComponent {
  /**
   * Day of month number.
   * 
   * type {number}
   */  
  @Input()
  day: number;

  /**
   * Month name.
   * 
   * type {string}
   */  
  @Input()
  month: string;

  /**
   * Icon css class.
   * 
   * type {string}
   */  
  @Input()
  iconClass: string;

  /**
   * News URL.
   * 
   * type {string}
   */  
  @Input()
  url: string;

  /**
   * News Title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  /**
   * News Content.
   * 
   * type {string}
   */  
  @Input()
  content: string;
}