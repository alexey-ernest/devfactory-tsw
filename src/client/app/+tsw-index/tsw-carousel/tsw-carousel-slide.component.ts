import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-carousel-slide',
  templateUrl: 'tsw-carousel-slide.component.html',
  styleUrls: ['tsw-carousel-slide.component.css'],
  host: {'[class.item]': 'true', '[class.active]': 'active'}
})
export class TswCarouselSlideComponent {
  /**
   * Image source.
   * 
   * type {string}
   */  
  @Input()
  imageSrc: string;

  /**
   * Indicates if the slide is active.
   * 
   * type {boolean}
   */  
  @Input()
  active: boolean;  
}