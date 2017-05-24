import { TestShakesPage } from './app.po';

describe('test-shakes App', () => {
  let page: TestShakesPage;

  beforeEach(() => {
    page = new TestShakesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
