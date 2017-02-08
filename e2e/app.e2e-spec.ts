import { Farmangular2Page } from './app.po';

describe('farmangular2 App', function() {
  let page: Farmangular2Page;

  beforeEach(() => {
    page = new Farmangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
