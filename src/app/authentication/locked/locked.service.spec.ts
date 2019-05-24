import { TestBed } from '@angular/core/testing';

import { LockedService } from './locked.service';

describe('LockedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LockedService = TestBed.get(LockedService);
    expect(service).toBeTruthy();
  });
});
