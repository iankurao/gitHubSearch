import { TestBed } from '@angular/core/testing';

import { GhApiService } from './gh-api.service';

describe('GhApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhApiService = TestBed.get(GhApiService);
    expect(service).toBeTruthy();
  });
});
