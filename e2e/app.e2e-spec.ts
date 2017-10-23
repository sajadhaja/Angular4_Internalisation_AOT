import { InternationalizationSamplePage } from './app.po';

describe('internationalization-sample App', () => {
  let page: InternationalizationSamplePage;

  beforeEach(() => {
    page = new InternationalizationSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
