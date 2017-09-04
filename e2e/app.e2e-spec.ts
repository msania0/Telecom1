import { BandwidthReconciliationPage } from './app.po';

describe('bandwidth-reconciliation App', () => {
  let page: BandwidthReconciliationPage;

  beforeEach(() => {
    page = new BandwidthReconciliationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
