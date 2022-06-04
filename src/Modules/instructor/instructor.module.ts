import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './instructor/instructor.component';
import { DatatableComponent } from './datatable/datatable.component';
import { EditBookingComponent } from './dialog-components/edit-booking/edit-booking.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InstructorComponent,
    DatatableComponent,
    EditBookingComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class InstructorModule { }
