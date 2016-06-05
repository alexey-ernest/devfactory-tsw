import {Component, Input, AfterContentInit} from 'angular2/core';

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

  ngAfterContentInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      // Projects Carousel
      $(".projects-carousel").owlCarousel({
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

      $('.recent-projects .touch-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('.recent-projects .touch-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
    });
  }
}