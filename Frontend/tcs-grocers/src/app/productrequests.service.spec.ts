import { TestBed } from '@angular/core/testing';

import { ProductrequestsService } from './productrequests.service';

describe('ProductrequestsService', () => {
  let service: ProductrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
