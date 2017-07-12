import { TestPage } from './app.po';

describe('test App', () => {
  let page: TestPage;

  beforeEach(() => {
    page = new TestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
