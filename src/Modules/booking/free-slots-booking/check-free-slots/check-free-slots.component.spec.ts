import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFreeSlotsComponent } from './check-free-slots.component';

describe('CheckFreeSlotsComponent', () => {
  let component: CheckFreeSlotsComponent;
  let fixture: ComponentFixture<CheckFreeSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckFreeSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFreeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
