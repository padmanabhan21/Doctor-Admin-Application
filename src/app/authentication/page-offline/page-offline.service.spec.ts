import { TestBed } from '@angular/core/testing';

import { PageOfflineService } from './page-offline.service';

describe('PageOfflineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageOfflineService = TestBed.get(PageOfflineService);
    expect(service).toBeTruthy();
  });
});
