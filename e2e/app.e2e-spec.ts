import { PslipPage } from './app.po';

describe('pslip App', function() {
  let page: PslipPage;

  beforeEach(() => {
    page = new PslipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
