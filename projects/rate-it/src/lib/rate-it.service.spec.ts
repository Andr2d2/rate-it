import { TestBed } from '@angular/core/testing';

import { RateItService } from './rate-it.service';

describe('RateItService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RateItService = TestBed.get(RateItService);
    expect(service).toBeTruthy();
  });
});
