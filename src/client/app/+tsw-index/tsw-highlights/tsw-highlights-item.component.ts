import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-highlights-item',
  templateUrl: 'tsw-highlights-item.component.html',
  styleUrls: ['tsw-highlights-item.component.css']
})
export class TswHighlightsItemComponent {
  /**
   * Icons css class.
   * 
   * type {string}
   */  
  @Input()
  iconClass: string;

  /**
   * Title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  /**
   * Description.
   * 
   * type {string}
   */  
  @Input()
  description: string;
}