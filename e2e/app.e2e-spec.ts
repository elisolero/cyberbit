import { CyberbitPage } from './app.po';

describe('cyberbit App', () => {
  let page: CyberbitPage;

  beforeEach(() => {
    page = new CyberbitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
