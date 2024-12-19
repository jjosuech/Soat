import { TestBed } from '@angular/core/testing';

import { SoatService } from './soat.service';

describe('SoatService', () => {
  let service: SoatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
