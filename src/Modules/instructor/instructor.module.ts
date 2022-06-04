import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import { DatatableComponent } from './datatable/datatable.component';
import { EditBookingComponent } from './dialog-components/edit-booking/edit-booking.component';



@NgModule({
  declarations: [
    InstructorComponent,
    DatatableComponent,
    EditBookingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
