import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaidComponent } from './add-maid.component';

describe('AddMaidComponent', () => {
  let component: AddMaidComponent;
  let fixture: ComponentFixture<AddMaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
