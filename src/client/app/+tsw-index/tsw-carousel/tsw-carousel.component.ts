import {Component, OnInit, ContentChildren, QueryList, ElementRef} from 'angular2/core';

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

  constructor(private element:ElementRef) { }

  ngOnInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    $(document).ready(function ($) {
      "use strict";

      // configure bootrstrap carousel
      $(element).find('.carousel').carousel({
        interval: 4000
      });
    });
  }
}