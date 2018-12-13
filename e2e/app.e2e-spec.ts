import { MyDemoAppPage } from './app.po';

describe('my-demo-app App', () => {
  let page: MyDemoAppPage;

  beforeEach(() => {
    page = new MyDemoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
