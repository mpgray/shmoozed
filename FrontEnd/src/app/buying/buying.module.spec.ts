import { BuyingModule } from './buying.module';

describe('BuyingModule', () => {
  let buyingModule: BuyingModule;

  beforeEach(() => {
    buyingModule = new BuyingModule();
  });

  it('should create an instance', () => {
    expect(buyingModule).toBeTruthy();
  });
});
