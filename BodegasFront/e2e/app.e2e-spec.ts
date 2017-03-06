import { BodegasFrontPage } from './app.po';

describe('bodegas-front App', () => {
  let page: BodegasFrontPage;

  beforeEach(() => {
    page = new BodegasFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
