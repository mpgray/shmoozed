import { SellingModule } from './selling.module';

describe('SellingModule', () => {
  let sellingModule: SellingModule;

  beforeEach(() => {
    sellingModule = new SellingModule();
  });

  it('should create an instance', () => {
    expect(sellingModule).toBeTruthy();
  });
});
