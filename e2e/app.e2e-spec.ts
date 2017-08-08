import { EStorePage } from './app.po';

describe('e-store App', () => {
  let page: EStorePage;

  beforeEach(() => {
    page = new EStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
