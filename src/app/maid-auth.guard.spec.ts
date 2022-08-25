import { TestBed } from '@angular/core/testing';

import { MaidAuthGuard } from './maid-auth.guard';

describe('MaidAuthGuard', () => {
  let guard: MaidAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaidAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
