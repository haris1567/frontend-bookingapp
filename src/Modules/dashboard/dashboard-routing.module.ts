import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULE_ADDRESS } from 'src/Models/modules';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
    { path: "", component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }

export const dashboardRoutingComponents = [DashboardComponent];
