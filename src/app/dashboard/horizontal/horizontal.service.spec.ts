import { TestBed } from '@angular/core/testing';

import { HorizontalService } from './horizontal.service';

describe('HorizontalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorizontalService = TestBed.get(HorizontalService);
    expect(service).toBeTruthy();
  });
});
