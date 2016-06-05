import {Component, Input, AfterContentInit, ElementRef} from 'angular2/core';

import {TswServicesItemComponent} from './tsw-services-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-services',
  templateUrl: 'tsw-services.component.html',
  styleUrls: ['tsw-services.component.css'],
  directives: [TswServicesItemComponent]
})
export class TswServicesComponent implements AfterContentInit {
  /**
   * Services section title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  constructor(private element:ElementRef) { }

  ngAfterContentInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    $(document).ready(function ($) {
      "use strict";

      // Projects Carousel
      $(element).find('.projects-carousel').owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 400,
        stopOnHover: true,
        autoPlay: 3000,
        items: 4,
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1]
      });

      /*----------------------------------------------------*/
      /*  Change Slider Nav Icons
       /*----------------------------------------------------*/

      $(element).find('.recent-projects .touch-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $(element).find('.recent-projects .touch-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
    });
  }
}