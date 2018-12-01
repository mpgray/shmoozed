import { TestBed, inject } from '@angular/core/testing';

import { SellerInsightsService } from './seller-insights.service';

describe('SellerInsightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerInsightsService]
    });
  });

  it('should be created', inject([SellerInsightsService], (service: SellerInsightsService) => {
    expect(service).toBeTruthy();
  }));
});
