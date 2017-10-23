import { TagscreenAdminPage } from './app.po';

describe('tagscreen-admin App', () => {
  let page: TagscreenAdminPage;

  beforeEach(() => {
    page = new TagscreenAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
