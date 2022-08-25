import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidcategoryComponent } from './maidcategory.component';

describe('MaidcategoryComponent', () => {
  let component: MaidcategoryComponent;
  let fixture: ComponentFixture<MaidcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
