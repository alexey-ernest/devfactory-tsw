import {Component, Input, OnInit, ElementRef} from 'angular2/core';

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

  constructor(private element:ElementRef) { }

  ngOnInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    $(document).ready(function ($) {
      "use strict";

      /*---------------------------------------------------*/
      /* Progress Bar
       /*---------------------------------------------------*/
      $(element).find('.skill-shortcode').appear(function () {
        $(element).find('.progress').each(function () {
          $(element).find('.progress-bar').css('width', function () {
            return ($(this).attr('data-percentage') + '%')
          });
        });
      }, {accY: -100});
    });
  }
}