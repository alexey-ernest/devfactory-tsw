import {Component, OnInit, ElementRef} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-back-to-top',
  templateUrl: 'tsw-back-to-top.component.html',
  styleUrls: ['tsw-back-to-top.component.css']
})
export class TswBackToTopComponent implements OnInit {
  constructor(private element:ElementRef) { }

  ngOnInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    $(document).ready(function ($) {
      "use strict";
      
      /*----------------------------------------------------*/
      /*  Back Top Link
       /*----------------------------------------------------*/

      var offset = 200;
      var duration = 500;
      $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
          $(element).find('.back-to-top').fadeIn(400);
        } else {
          $(element).find('.back-to-top').fadeOut(400);
        }
      });

      $(element).find('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
      })      
    });
  }
}