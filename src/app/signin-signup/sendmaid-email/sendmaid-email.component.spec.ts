import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmaidEmailComponent } from './sendmaid-email.component';

describe('SendmaidEmailComponent', () => {
  let component: SendmaidEmailComponent;
  let fixture: ComponentFixture<SendmaidEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmaidEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmaidEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
