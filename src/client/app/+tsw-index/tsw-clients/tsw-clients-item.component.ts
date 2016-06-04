import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-clients-item',
  templateUrl: 'tsw-clients-item.component.html'
})
export class TswClientsItemComponent {
  /**
   * Link URL.
   * 
   * type {string}
   */  
  @Input()
  url: string;

  /**
   * Image source.
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
}