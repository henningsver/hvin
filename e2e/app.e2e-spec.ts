import { HvinPage } from './app.po';

describe('hvin App', () => {
  let page: HvinPage;

  beforeEach(() => {
    page = new HvinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
