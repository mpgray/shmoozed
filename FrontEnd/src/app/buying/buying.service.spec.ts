import { TestBed, inject } from '@angular/core/testing';

import { BuyingService } from './buying.service';

describe('BuyingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyingService]
    });
  });

  it('should be created', inject([BuyingService], (service: BuyingService) => {
    expect(service).toBeTruthy();
  }));
});
