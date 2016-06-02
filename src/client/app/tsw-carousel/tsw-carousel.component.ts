import {Component, OnInit, ContentChildren, QueryList} from 'angular2/core';

import {TswCarouselSlideDirective} from './tsw-carousel-slide.directive';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-carousel',
  templateUrl: 'tsw-carousel.component.html',
  directives: [TswCarouselSlideDirective]
})
export class TswCarouselComponent implements OnInit {
  @ContentChildren(TswCarouselSlideDirective)
  slides: QueryList<TswCarouselSlideDirective>;

  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      // configure bootrstrap carousel
      $(document).ready(function() {
        $('.carousel').carousel({
          interval: 4000
        })
      });
    });
  }
}