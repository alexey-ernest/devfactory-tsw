import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TestingServicesWebsite2016App} from '../app/testing-services-website-2016.component';

beforeEachProviders(() => [TestingServicesWebsite2016App]);

// describe('App: TestingServicesWebsite2016', () => {
//   it('should have the `defaultMeaning` as 42', inject([TestingServicesWebsite2016App], (app: TestingServicesWebsite2016App) => {
//     expect(app.defaultMeaning).toBe(42);
//   }));

//   describe('#meaningOfLife', () => {
//     it('should get the meaning of life', inject([TestingServicesWebsite2016App], (app: TestingServicesWebsite2016App) => {
//       expect(app.meaningOfLife()).toBe('The meaning of life is 42');
//       expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
//     }));
//   });
// });

