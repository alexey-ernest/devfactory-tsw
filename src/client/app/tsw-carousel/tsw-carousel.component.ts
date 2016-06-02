import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-carousel',
  templateUrl: 'tsw-carousel.component.html'
})
export class TswCarouselComponent implements OnInit {
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