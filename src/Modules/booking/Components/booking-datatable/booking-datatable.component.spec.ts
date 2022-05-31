import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDatatableComponent } from './booking-datatable.component';

describe('BookingDatatableComponent', () => {
  let component: BookingDatatableComponent;
  let fixture: ComponentFixture<BookingDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
