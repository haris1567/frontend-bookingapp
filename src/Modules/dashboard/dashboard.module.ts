import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoutingComponents, DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LabDetailsComponent } from './lab-details/lab-details.component';

@NgModule({
  declarations: [dashboardRoutingComponents, LabDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
