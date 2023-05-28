import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/home');
    });
    it('should have a title saying Udagram By @JC', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Udagram By @JC');
      });
    });
  });
});
