import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-back-to-top',
  templateUrl: 'tsw-back-to-top.component.html',
  styleUrls: ['tsw-back-to-top.component.css']
})
export class TswBackToTopComponent implements OnInit {
  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";
      
      /*----------------------------------------------------*/
      /*  Back Top Link
       /*----------------------------------------------------*/

      var offset = 200;
      var duration = 500;
      $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });
      $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
      })      

    });
  }
}