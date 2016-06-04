import {Component, OnInit, ContentChildren, QueryList} from 'angular2/core';

import {TswCarouselSlideComponent} from './tsw-carousel-slide.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-carousel',
  templateUrl: 'tsw-carousel.component.html',
  styleUrls: ['tsw-carousel.component.css'],
  directives: [TswCarouselSlideComponent]
})
export class TswCarouselComponent implements OnInit {
  /**
   * Child TswCarouselSlideComponent components.
   * 
   * type {QueryList<TswCarouselSlideComponent>}
   */  
  @ContentChildren(TswCarouselSlideComponent)
  slides: QueryList<TswCarouselSlideComponent>;

  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      // configure bootrstrap carousel
      $('.carousel').carousel({
        interval: 4000
      });
    });
  }
}