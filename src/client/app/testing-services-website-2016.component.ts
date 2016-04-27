import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TswIndexComponent} from './+tsw-index';

@Component({
  moduleId: __moduleName,
  selector: 'testing-services-website-2016-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'testing-services-website-2016.component.html',
  styleUrls: ['testing-services-website-2016.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/', name: 'TswIndex', component: TswIndexComponent}
])
export class TestingServicesWebsite2016App {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
