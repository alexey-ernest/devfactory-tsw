import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-statistics-item',
  templateUrl: 'tsw-statistics-item.component.html',
  styleUrls: ['tsw-statistics-item.component.css']
})
export class TswStatisticsItemComponent {
  /**
   * Statistics item title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  /**
   * Statistics item percentage.
   * 
   * type {number}
   */  
  @Input()
  percentage: number;

  /**
   * Background color.
   * 
   * type {string}
   */  
  @Input()
  bgColor: string;

  /**
   * Statistics item description.
   * 
   * type {string}
   */  
  @Input()
  description: string;
}