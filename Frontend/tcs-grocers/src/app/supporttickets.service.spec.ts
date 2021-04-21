import { TestBed } from '@angular/core/testing';

import { SupportticketsService } from './supporttickets.service';

describe('SupportticketsService', () => {
  let service: SupportticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
