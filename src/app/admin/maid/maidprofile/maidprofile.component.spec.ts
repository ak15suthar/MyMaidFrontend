import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidprofileComponent } from './maidprofile.component';

describe('MaidprofileComponent', () => {
  let component: MaidprofileComponent;
  let fixture: ComponentFixture<MaidprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
