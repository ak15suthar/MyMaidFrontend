import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidComponent } from './maid.component';

describe('MaidComponent', () => {
  let component: MaidComponent;
  let fixture: ComponentFixture<MaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
