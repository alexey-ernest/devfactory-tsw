export class TestingServicesWebsite2016Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('testing-services-website-2016-app p')).getText();
  }
}
