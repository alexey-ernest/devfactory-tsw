import {Component, OnInit} from 'angular2/core';

import {TswHeaderComponent, TswFooterComponent, TswBackToTopComponent} from '../shared';
import {CAROUSEL_DIRECTIVES} from '../tsw-carousel';
import {HIGHLIGHTS_DIRECTIVES} from '../tsw-highlights';
import {SERVICES_DIRECTIVES} from '../tsw-services';
import {LATEST_NEWS_DIRECTIVES} from '../tsw-latest-news';
import {STATISTICS_DIRECTIVES} from '../tsw-statistics';
import {CLIENTS_DIRECTIVES} from '../tsw-clients';

interface Window { $: any; jQuery: any; start: any; }
@Component({
  moduleId: __moduleName,
  selector: 'tsw-index',
  templateUrl: 'tsw-index.component.html',
  styleUrls: ['tsw-index.component.css'],
  directives: [
    TswHeaderComponent,
    CAROUSEL_DIRECTIVES,
    HIGHLIGHTS_DIRECTIVES,
    SERVICES_DIRECTIVES,
    LATEST_NEWS_DIRECTIVES,
    STATISTICS_DIRECTIVES,
    CLIENTS_DIRECTIVES,
    TswBackToTopComponent,
    TswFooterComponent
  ]
})
export class TswIndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    var $ = window['$'];
    var jQuery = window['jQuery'];
    var start = window['start'];
    //  UI ITEMS for LAYOUT
    /* ----------------- Start JS Document ----------------- */

    // Page Loader
    $(window).load(function () {
      "use strict";
      $('#loader').fadeOut();
    });

    $(document).ready(function ($) {

      /*--------------------------------------------------*/
      /* Counter
       /*--------------------------------------------------*/

      $('.timer').countTo();
      $('.counter-item').appear(function () {
        $('.timer').countTo();
      }, {
        accY: -100
      });


      /*----------------------------------------------------*/
      /*	Nice-Scroll
       /*----------------------------------------------------*/

      // $("html").niceScroll({
      //   scrollspeed: 100,
      //   mousescrollstep: 38,
      //   cursorwidth: 5,
      //   cursorborder: 0,
      //   cursorcolor: '#333',
      //   autohidemode: true,
      //   zindex: 999999999,
      //   horizrailenabled: false,
      //   cursorborderradius: 0,
      // });
      // 

      /*----------------------------------------------------*/
      /*	Sliders & Carousel
       /*----------------------------------------------------*/

      ////------- Touch Slider
      var time = 4.4,
        $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime,
        returnSliderNav:any,
        returnSliderPag:any,
        returnSliderProgressBar:any,
        returnAutoPlay:any;
      $('.touch-slider').each(function () {
        var owl = jQuery(this),
          sliderNav = $(this).attr('data-slider-navigation'),
          sliderPag = $(this).attr('data-slider-pagination'),
          sliderProgressBar = $(this).attr('data-slider-progress-bar');

        if (sliderNav == 'false' || sliderNav == '0') {
          returnSliderNav = false
        } else {
          returnSliderNav = true
        }

        if (sliderPag == 'true' || sliderPag == '1') {
          returnSliderPag = true
        } else {
          returnSliderPag = false
        }

        if (sliderProgressBar == 'true' || sliderProgressBar == '1') {
          returnSliderProgressBar = progressBar
          returnAutoPlay = false
        } else {
          returnSliderProgressBar = false
          returnAutoPlay = true
        }

        // owl.owlCarousel({
        //   navigation: returnSliderNav,
        //   pagination: returnSliderPag,
        //   slideSpeed: 400,
        //   paginationSpeed: 400,
        //   lazyLoad: true,
        //   singleItem: true,
        //   autoHeight: true,
        //   autoPlay: returnAutoPlay,
        //   stopOnHover: returnAutoPlay,
        //   transitionStyle: "fade",
        //   afterInit: returnSliderProgressBar,
        //   startDragging: pauseOnDragging
        // });

      });

      function progressBar(elem:any) {
        $elem = elem;
        buildProgressBar();
        start();
      }

      function buildProgressBar() {
        $progressBar = $("<div>", {
          id: "progressBar"
        });
        $bar = $("<div>", {
          id: "bar"
        });
        $progressBar.append($bar).prependTo($elem);
      }

      function pauseOnDragging() {
        isPause = true;
      }

      ////------- Testimonials Carousel
      $(".testimonials-carousel").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 2500,
        stopOnHover: true,
        autoPlay: 3000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
      });

      ////------- Testimonials Carousel
      $(".fullwidth-projects-carousel").owlCarousel({
        navigation: false,
        pagination: false,
        slideSpeed: 400,
        stopOnHover: true,
        autoPlay: 3000,
        items: 5,
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [479, 1]
      });


      /*----------------------------------------------------*/
      /*	Tabs
       /*----------------------------------------------------*/

      $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })


      /*----------------------------------------------------*/
      /*	Css3 Transition
       /*----------------------------------------------------*/

      $('*').each(function () {
        if ($(this).attr('data-animation')) {
          var $animationName = $(this).attr('data-animation'),
            $animationDelay = "delay-" + $(this).attr('data-animation-delay');
          $(this).appear(function () {
            $(this).addClass('animated').addClass($animationName);
            $(this).addClass('animated').addClass($animationDelay);
          });
        }
      });


      /*----------------------------------------------------*/
      /*	Pie Charts
       /*----------------------------------------------------*/

      var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';

      function initPieCharts() {
        var chart = $('.' + pieChartClass);
        chart.each(function () {
          $(this).appear(function () {
            var $this = $(this),
              chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
              chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
            if (!$this.hasClass(pieChartLoadedClass)) {
              $this.easyPieChart({
                animate: 2000,
                size: chartBarWidth,
                lineWidth: 2,
                scaleColor: false,
                trackColor: "#eee",
                barColor: chartBarColor,
              }).addClass(pieChartLoadedClass);
            }
          });
        });
      }

      initPieCharts();


      /*----------------------------------------------------*/
      /*	Animation Progress Bars
       /*----------------------------------------------------*/

      $("[data-progress-animation]").each(function () {

        var $this = $(this);

        $this.appear(function () {

          var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

          if (delay > 1) $this.css("animation-delay", delay + "ms");

          setTimeout(function () {
            $this.animate({width: $this.attr("data-progress-animation")}, 800);
          }, delay);

        }, {accX: 0, accY: -50});

      });


      /*----------------------------------------------------*/
      /*	Milestone Counter
       /*----------------------------------------------------*/

      jQuery('.milestone-block').each(function () {
        jQuery(this).appear(function () {
          var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
          jQuery(this).find('.milestone-number').countTo({
            from: 0,
            to: $endNum,
            speed: 4000,
            refreshInterval: 60,
          });
        }, {accX: 0, accY: 0});
      });


      /*----------------------------------------------------*/
      /*	Nivo Lightbox
       /*----------------------------------------------------*/

      $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
        errorMessage: 'The requested content cannot be loaded. Please try again later.'
      });


      /*----------------------------------------------------*/
      /*	Change Slider Nav Icons
       /*----------------------------------------------------*/

      $('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
      $('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
      $('.read-more').append('<i class="fa fa-angle-right"></i>');


      /*----------------------------------------------------*/
      /*	Tooltips & Fit Vids & Parallax & Text Animations
       /*----------------------------------------------------*/

      $("body").fitVids();

      $('.itl-tooltip').tooltip();

      $('.bg-parallax').each(function () {
        $(this).parallax("30%", 0.2);
      });

      $('.tlt').textillate({
        loop: true,
        in: {
          effect: 'fadeInUp',
          delayScale: 2,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: true,
        },
        out: {
          effect: 'fadeOutUp',
          delayScale: 2,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: true,
        },
      });

    });


    /*----------------------------------------------------*/
    /*	Portfolio Isotope
     /*----------------------------------------------------*/

    jQuery(window).load(function () {

      var $container = $('#portfolio');
      $container.isotope({
        layoutMode: 'masonry',
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      $('.portfolio-filter ul a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          }
        });
        return false;
      });

      var $optionSets = $('.portfolio-filter ul'),
        $optionLinks = $optionSets.find('a');
      $optionLinks.click(function () {
        var $this = $(this);
        if ($this.hasClass('selected')) {
          return false;
        }
        var $optionSet = $this.parents('.portfolio-filter ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
      });

    });
    /* ----------------- End JS Document ----------------- */


    // Styles Switcher JS
    function setActiveStyleSheet(title) {
      var i, a, main;
      for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
          a.disabled = true;
          if (a.getAttribute("title") == title) a.disabled = false;
        }
      }
    }

    function getActiveStyleSheet() {
      var i, a;
      for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
      }
      return null;
    }

    function getPreferredStyleSheet() {
      var i, a;
      for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1
          && a.getAttribute("rel").indexOf("alt") == -1
          && a.getAttribute("title")
        ) return a.getAttribute("title");
      }
      return null;
    }

    function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toUTCString();
      }
      else expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    window.onload = function (e) {
      var cookie = readCookie("style");
      var title = cookie ? cookie : getPreferredStyleSheet();
      setActiveStyleSheet(title);
    }

    window.onunload = function (e) {
      var title = getActiveStyleSheet();
      createCookie("style", title, 365);
    }

    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);


    $(document).ready(function () {

      // Styles Switcher
      $(document).ready(function () {
        $('.open-switcher').click(function () {
          if ($(this).hasClass('show-switcher')) {
            $('.switcher-box').css({'left': 0});
            $('.open-switcher').removeClass('show-switcher');
            $('.open-switcher').addClass('hide-switcher');
          } else if (jQuery(this).hasClass('hide-switcher')) {
            $('.switcher-box').css({'left': '-212px'});
            $('.open-switcher').removeClass('hide-switcher');
            $('.open-switcher').addClass('show-switcher');
          }
        });
      });

      //Top Bar Switcher
      $(".topbar-style").change(function () {
        if ($(this).val() == 1) {
          $(".top-bar").removeClass("dark-bar"),
            $(".top-bar").removeClass("color-bar"),
            $(window).resize();
        } else if ($(this).val() == 2) {
          $(".top-bar").removeClass("color-bar"),
            $(".top-bar").addClass("dark-bar"),
            $(window).resize();
        } else if ($(this).val() == 3) {
          $(".top-bar").removeClass("dark-bar"),
            $(".top-bar").addClass("color-bar"),
            $(window).resize();
        }
      });

      //Layout Switcher
      $(".layout-style").change(function () {
        if ($(this).val() == 1) {
          $("#container").removeClass("boxed-page"),
            $(window).resize();
        } else {
          $("#container").addClass("boxed-page"),
            $(window).resize();
        }
      });

      //Background Switcher
      $('.switcher-box .bg-list li a').click(function () {
        var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
        if (current == '2') {
          var bg = $(this).css("backgroundImage");
          $("body").css("backgroundImage", bg);
        } else {
          alert('Please select boxed layout');
        }
      });

    });

  }
}