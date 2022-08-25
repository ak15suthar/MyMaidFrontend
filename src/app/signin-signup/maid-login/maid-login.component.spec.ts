import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidLoginComponent } from './maid-login.component';

describe('MaidLoginComponent', () => {
  let component: MaidLoginComponent;
  let fixture: ComponentFixture<MaidLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaidLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
