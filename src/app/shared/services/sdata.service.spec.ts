import { TestBed } from '@angular/core/testing';

import { SdataService } from './sdata.service';

describe('SdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SdataService = TestBed.get(SdataService);
    expect(service).toBeTruthy();
  });
});
