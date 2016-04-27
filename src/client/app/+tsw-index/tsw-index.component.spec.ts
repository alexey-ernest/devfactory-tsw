import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {TswIndexComponent} from './tsw-index.component';
class MockRouter {
  registerPrimaryOutlet() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('TswIndex Component', () => {

  beforeEachProviders(() => [
    provide(Router, { useClass: MockRouter }),
    provide(RouteParams, { useClass: MockRouteParams }),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TswIndexComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
