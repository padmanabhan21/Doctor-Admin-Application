import { TestBed } from '@angular/core/testing';

import { Page500Service } from './page500.service';

describe('Page500Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Page500Service = TestBed.get(Page500Service);
    expect(service).toBeTruthy();
  });
});
