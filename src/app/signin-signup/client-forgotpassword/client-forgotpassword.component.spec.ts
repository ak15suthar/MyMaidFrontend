import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientForgotpasswordComponent } from './client-forgotpassword.component';

describe('ClientForgotpasswordComponent', () => {
  let component: ClientForgotpasswordComponent;
  let fixture: ComponentFixture<ClientForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientForgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
