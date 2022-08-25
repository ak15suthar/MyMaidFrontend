import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendclientEmailComponent } from './sendclient-email.component';

describe('SendclientEmailComponent', () => {
  let component: SendclientEmailComponent;
  let fixture: ComponentFixture<SendclientEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendclientEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendclientEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
