import { TestBed } from '@angular/core/testing';

import { SoatApiService } from './soat-api.service';

describe('SoatApiService', () => {
  let service: SoatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoatApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
