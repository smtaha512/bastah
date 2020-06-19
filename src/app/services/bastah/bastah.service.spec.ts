import { TestBed } from '@angular/core/testing';

import { BastahService } from './bastah.service';

describe('BastahService', () => {
  let service: BastahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BastahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
