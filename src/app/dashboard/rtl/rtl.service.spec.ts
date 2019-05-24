import { TestBed } from '@angular/core/testing';

import { RtlService } from './rtl.service';

describe('RtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RtlService = TestBed.get(RtlService);
    expect(service).toBeTruthy();
  });
});
