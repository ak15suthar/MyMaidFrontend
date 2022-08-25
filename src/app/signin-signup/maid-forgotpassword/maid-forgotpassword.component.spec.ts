import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidForgotpasswordComponent } from './maid-forgotpassword.component';

describe('MaidForgotpasswordComponent', () => {
  let component: MaidForgotpasswordComponent;
  let fixture: ComponentFixture<MaidForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidForgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
