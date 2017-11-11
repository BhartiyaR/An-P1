import { TestBed, inject } from '@angular/core/testing';

import { VegesService } from './veges.service';

describe('VegesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VegesService]
    });
  });

  it('should be created', inject([VegesService], (service: VegesService) => {
    expect(service).toBeTruthy();
  }));
});
