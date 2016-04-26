import { TestingServicesWebsite2016Page } from './app.po';

describe('testing-services-website-2016 App', function() {
  let page: TestingServicesWebsite2016Page;

  beforeEach(() => {
    page = new TestingServicesWebsite2016Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('testing-services-website-2016 Works!');
  });
});
