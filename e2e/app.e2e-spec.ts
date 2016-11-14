import { DagerikhlPage } from './app.po';

describe('dagerikhl App', function() {
  let page: DagerikhlPage;

  beforeEach(() => {
    page = new DagerikhlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
