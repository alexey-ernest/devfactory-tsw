import {Component, OnInit, ElementRef} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-header',
  templateUrl: 'tsw-header.component.html',
  styleUrls: ['tsw-header.component.css']
})
export class TswHeaderComponent implements OnInit {
  
  constructor(private element:ElementRef) { }

  ngOnInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    $(document).ready(function ($) {
      "use strict";

      /*----------------------------------------------------*/
      /*  Nav Menu & Search
      /*----------------------------------------------------*/

      $(element).find('.nav > li:has(ul)').addClass('drop');
      $(element).find('.nav > li.drop > ul').addClass('dropdown');
      $(element).find('.nav > li.drop > ul.dropdown ul').addClass('sup-dropdown');

      $(element).find('.show-search').click(function () {
        $(element).find('.search-form').fadeIn(300);
        $(element).find('.search-form input').focus();
      });

      $(element).find('.search-form input').blur(function () {
        $(element).find('.search-form').fadeOut(300);
      });


      /**
       * Slick Nav
       */

      $(element).find('.wpb-mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'margo',
        allowParentLinks: true,
        duplicate: false,
        label: '',
        closedSymbol: '<i class="fa fa-angle-right"></i>',
        openedSymbol: '<i class="fa fa-angle-down"></i>',
      });

      /*----------------------------------------------------*/
      /*  Sticky Header
       /*----------------------------------------------------*/

      (function () {

        var docElem = document.documentElement,
          didScroll = false,
          changeHeaderOn = 100;
        document.querySelector('header');

        function init() {
          window.addEventListener('scroll', function () {
            if (!didScroll) {
              didScroll = true;
              setTimeout(scrollPage, 250);
            }
          }, false);
        }

        function scrollPage() {
          var sy = scrollY();
          if (sy >= changeHeaderOn) {
            $(element).find('.top-bar').slideUp(300);
            $(element).find('header').addClass('fixed-header');
            $(element).find('.navbar-brand').css({'padding-top': 5 + 'px', 'padding-bottom': 19 + 'px'});

            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
              $(element).find('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + 'px', 'padding-bottom': 0 + 'px'});
            } else {
              $(element).find('.navbar-default .navbar-nav > li > a').css({'padding-top': 20 + 'px', 'padding-bottom': 20 + 'px'});
              $(element).find('.search-side').css({'margin-top': -7 + 'px'});
            }

          } else {
            $(element).find('.top-bar').slideDown(300);
            $(element).find('header').removeClass('fixed-header');
            $(element).find('.navbar-brand').css({'padding-top': 17 + 'px', 'padding-bottom': 27 + 'px'});

            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
              $(element).find('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + 'px', 'padding-bottom': 0 + 'px'});
            } else {
              $(element).find('.navbar-default .navbar-nav > li > a').css({'padding-top': 28 + 'px', 'padding-bottom': 28 + 'px'});
              $(element).find('.search-side').css({'margin-top': 0 + 'px'});
            }
          }
          didScroll = false;
        }

        function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
        }

        init();
      })();

    });
  }
}