import { TestBed } from '@angular/core/testing';

import { MaidCategoryService } from './maid-category.service';

describe('MaidCategoryService', () => {
  let service: MaidCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaidCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
