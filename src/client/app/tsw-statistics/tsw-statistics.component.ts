import {Component, Input, OnInit} from 'angular2/core';

import {TswStatisticsItemComponent} from './tsw-statistics-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-statistics',
  templateUrl: 'tsw-statistics.component.html',
  directives: [TswStatisticsItemComponent]
})
export class TswStatisticsComponent implements OnInit {
  /**
   * Statistics section title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      /*---------------------------------------------------*/
      /* Progress Bar
       /*---------------------------------------------------*/
      $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
          $('.progress-bar').css('width', function () {
            return ($(this).attr('data-percentage') + '%')
          });
        });
      }, {accY: -100});
    });
  }
}