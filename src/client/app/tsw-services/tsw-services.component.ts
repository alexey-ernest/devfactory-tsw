import {Component, Input, OnInit} from 'angular2/core';

import {TswServicesItemComponent} from './tsw-services-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-services',
  templateUrl: 'tsw-services.component.html',
  directives: [TswServicesItemComponent]
})
export class TswServicesComponent implements OnInit {
  /**
   * Services section title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      $(document).ready(function() {
        
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
        
      });
    });
  }
}