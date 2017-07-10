import { AngularToledoPage } from './app.po';

describe('angular-toledo App', () => {
  let page: AngularToledoPage;

  beforeEach(() => {
    page = new AngularToledoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
