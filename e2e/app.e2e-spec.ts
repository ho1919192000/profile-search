import { ProfileSearchPage } from './app.po';

describe('profile-search App', () => {
  let page: ProfileSearchPage;

  beforeEach(() => {
    page = new ProfileSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
