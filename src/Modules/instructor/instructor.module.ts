import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { EditBookingComponent } from './dialog-components/edit-booking/edit-booking.component';
import { SharedModule } from '../shared/shared.module';
import { instructorRoutingComponents, InstructorRoutingModule } from './instructor-routing.module';



@NgModule({
  declarations: [
    instructorRoutingComponents,
    DatatableComponent,
    EditBookingComponent
  ],
  imports: [
    CommonModule, SharedModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
