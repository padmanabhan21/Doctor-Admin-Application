import { TestBed } from '@angular/core/testing';

import { Page404Service } from './page404.service';

describe('Page404Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Page404Service = TestBed.get(Page404Service);
    expect(service).toBeTruthy();
  });
});
