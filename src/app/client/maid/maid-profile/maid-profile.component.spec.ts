import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidProfileComponent } from './maid-profile.component';

describe('MaidProfileComponent', () => {
  let component: MaidProfileComponent;
  let fixture: ComponentFixture<MaidProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
