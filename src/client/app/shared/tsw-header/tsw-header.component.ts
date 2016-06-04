import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-header',
  templateUrl: 'tsw-header.component.html'
})
export class TswHeaderComponent implements OnInit {
  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      /*----------------------------------------------------*/
      /*  Nav Menu & Search
      /*----------------------------------------------------*/

      $(".nav > li:has(ul)").addClass("drop");
      $(".nav > li.drop > ul").addClass("dropdown");
      $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

      $('.show-search').click(function () {
        $('.search-form').fadeIn(300);
        $('.search-form input').focus();
      });
      $('.search-form input').blur(function () {
        $('.search-form').fadeOut(300);
      });


      /**
       * Slick Nav
       */

      $('.wpb-mobile-menu').slicknav({
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
            $('.top-bar').slideUp(300);
            $("header").addClass("fixed-header");
            $('.navbar-brand').css({'padding-top': 5 + "px", 'padding-bottom': 19 + "px"});

            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
              $('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + "px", 'padding-bottom': 0 + "px"})
            } else {
              $('.navbar-default .navbar-nav > li > a').css({'padding-top': 20 + "px", 'padding-bottom': 20 + "px"})
              $('.search-side').css({'margin-top': -7 + "px"});
            }
            ;

          }
          else {
            $('.top-bar').slideDown(300);
            $("header").removeClass("fixed-header");
            $('.navbar-brand').css({'padding-top': 17 + "px", 'padding-bottom': 27 + "px"});

            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
              $('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + "px", 'padding-bottom': 0 + "px"})
            } else {
              $('.navbar-default .navbar-nav > li > a').css({'padding-top': 28 + "px", 'padding-bottom': 28 + "px"})
              $('.search-side').css({'margin-top': 0 + "px"});
            }
            ;

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