import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-services-item',
  templateUrl: 'tsw-services-item.component.html',
  styleUrls: ['tsw-services-item.component.css']
})
export class TswServicesItemComponent {
  /**
   * Thumb image src.
   * 
   * type {string}
   */  
  @Input()
  imageSrc: string;

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