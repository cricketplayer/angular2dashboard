import { ModernisationDashboardPage } from './app.po';

describe('modernisation-dashboard App', () => {
  let page: ModernisationDashboardPage;

  beforeEach(() => {
    page = new ModernisationDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
