import { TestBed } from '@angular/core/testing';

import { MaidService } from './maid.service';

describe('MaidService', () => {
  let service: MaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
