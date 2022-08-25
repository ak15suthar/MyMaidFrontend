import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidRegisterComponent } from './maid-register.component';

describe('MaidRegisterComponent', () => {
  let component: MaidRegisterComponent;
  let fixture: ComponentFixture<MaidRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
