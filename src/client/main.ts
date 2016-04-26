import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {TestingServicesWebsite2016App} from './app/testing-services-website-2016.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestingServicesWebsite2016App);
