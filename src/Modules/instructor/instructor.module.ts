import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { SharedModule } from '../shared/shared.module';
import { instructorRoutingComponents, InstructorRoutingModule } from './instructor-routing.module';


@NgModule({
  declarations: [
    instructorRoutingComponents,
    DatatableComponent,
  ],
  imports: [
    CommonModule, SharedModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
