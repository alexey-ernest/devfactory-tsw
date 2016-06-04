import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TswHeaderComponent} from './tsw-header';
import {TswCarouselComponent, TswCarouselSlideDirective} from './tsw-carousel';
import {TswHighlightsComponent, TswHighlightsItemComponent} from './tsw-highlights';
import {TswServicesComponent, TswServicesItemComponent} from './tsw-services';
import {TswLatestNewsComponent, TswLatestNewsItemComponent} from './tsw-latest-news';
import {TswBackToTopComponent} from './tsw-back-to-top';
import {TswIndexComponent} from './+tsw-index';

@Component({
  moduleId: __moduleName,
  selector: 'testing-services-website-2016-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'testing-services-website-2016.component.html',
  styleUrls: ['testing-services-website-2016.component.css'],
  directives: [
    TswHeaderComponent,
    TswCarouselComponent,
    TswCarouselSlideDirective,
    TswHighlightsComponent,
    TswHighlightsItemComponent,
    TswServicesComponent,
    TswServicesItemComponent,
    TswLatestNewsComponent,
    TswLatestNewsItemComponent,
    TswBackToTopComponent,
    TswIndexComponent
  ],
  pipes: []
})
export class TestingServicesWebsite2016App implements OnInit {

  ngOnInit() {
    var $ = window['$'];

    $(document).ready(function ($) {
      "use strict";

      $(document).ready(function() {
        


      });
    });
  }
}
