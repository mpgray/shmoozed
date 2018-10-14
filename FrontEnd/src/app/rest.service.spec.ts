import { TestBed, inject } from '@angular/core/testing';

import { RESTService } from './rest.service';

describe('RESTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RESTService]
    });
  });

  it('should be created', inject([RESTService], (service: RESTService) => {
    expect(service).toBeTruthy();
  }));
});
