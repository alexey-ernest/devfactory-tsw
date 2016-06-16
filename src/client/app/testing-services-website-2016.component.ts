import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TswGoogleAnalyticsComponent} from './shared/tsw-google-analytics'

import {TswIndexComponent} from './+tsw-index';

@Component({
  moduleId: __moduleName,
  selector: 'testing-services-website-2016-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'testing-services-website-2016.component.html',
  styleUrls: ['testing-services-website-2016.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    TswGoogleAnalyticsComponent
  ]
})
@RouteConfig([{
  name: 'Index',
  path: '/',
  component: TswIndexComponent,
  useAsDefault: true
}])
export class TestingServicesWebsite2016App {
}
