import { TestBed, inject } from '@angular/core/testing';

import { AddSellerItemService } from './add-seller-item.service';

describe('AddSellerItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSellerItemService]
    });
  });

  it('should be created', inject([AddSellerItemService], (service: AddSellerItemService) => {
    expect(service).toBeTruthy();
  }));
});
