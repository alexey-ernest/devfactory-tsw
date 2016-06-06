import {Component, Input, AfterContentInit, ContentChildren, QueryList, ElementRef} from 'angular2/core';

import {TswClientsItemComponent} from './tsw-clients-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-clients',
  templateUrl: 'tsw-clients.component.html',
  directives: [TswClientsItemComponent]
})
export class TswClientsComponent implements AfterContentInit {
  /**
   * Child TswClientsItemComponent components.
   * 
   * type {QueryList<TswClientsItemComponent>}
   */  
  @ContentChildren(TswClientsItemComponent)
  items: QueryList<TswClientsItemComponent>;

  /**
   * Clients section title.
   * 
   * type {string}
   */  
  @Input()
  title: string;

  constructor(private element:ElementRef) { }

  ngAfterContentInit() {
    var $ = window['$'];
    var element = this.element.nativeElement;

    var itemsNum = this.items.length;

    $(document).ready(function ($) {
      "use strict";

      // Custom Carousel
      $(element).find('.our-clients .custom-carousel').each(function () {
        var owl = $(this),
          sliderNavigation = $(this).attr('data-navigation'),
          deskitemsNum:any,
          desksmallitemsNum:any,
          tabletitemsNum:any;

        if (sliderNavigation == 'false' || sliderNavigation == '0') {
          var returnSliderNavigation = false
        } else {
          var returnSliderNavigation = true
        }
        if (itemsNum == 1) {
          deskitemsNum = 1;
          desksmallitemsNum = 1;
          tabletitemsNum = 1;
        }
        else if (itemsNum >= 2 && itemsNum < 4) {
          deskitemsNum = itemsNum;
          desksmallitemsNum = itemsNum - 1;
          tabletitemsNum = itemsNum - 1;
        }
        else if (itemsNum >= 4 && itemsNum < 8) {
          deskitemsNum = itemsNum - 1;
          desksmallitemsNum = itemsNum - 2;
          tabletitemsNum = itemsNum - 3;
        }
        else {
          deskitemsNum = itemsNum - 3;
          desksmallitemsNum = itemsNum - 6;
          tabletitemsNum = itemsNum - 8;
        }
        owl.owlCarousel({
          slideSpeed: 300,
          stopOnHover: true,
          autoPlay: false,
          navigation: returnSliderNavigation,
          pagination: false,
          lazyLoad: true,
          items: itemsNum,
          itemsDesktop: [1000, deskitemsNum],
          itemsDesktopSmall: [900, desksmallitemsNum],
          itemsTablet: [600, tabletitemsNum],
          itemsMobile: false,
          transitionStyle: "goDown",
        });
      });

      /*----------------------------------------------------*/
      /*  Change Slider Nav Icons
       /*----------------------------------------------------*/

      $(element).find('.our-clients .touch-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $(element).find('.our-clients .touch-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
    });
  }
}